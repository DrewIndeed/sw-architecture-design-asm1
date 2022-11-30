import axios from "axios";

// create axios client instance with needed config
const hotelClient = axios.create({
  baseURL: "https://api.jsonbin.io/v3/b",
});

// initial headers config
const initialHeaders = {
  "Content-Type": "application/json",
  "X-Master-Key":
    "$2b$10$LrvNJsfs5r6qW62PPBT0kuN3jlZcGqQOXS5rl0R1mHPDiuLiZjV12",
};

export const hotelApiFetcher = async (url, options = {}) => {
  const { id = undefined, method = "get", headers = {}, data = {} } = options;
  if (url.includes(":id") && !id) return -1;

  const res = await hotelClient({
    url: id ? url.replace(":id", id) : url,
    method,
    headers: { ...initialHeaders, ...headers },
    data,
  });

  // --- VERY IMPORTANT NOTES ---
  // ERROR LEVEL 1: ERROR COMING FROM AXIOS, this will catch any status !== 200
  // ERROR LEVEL 2: ERROR COMING FROM REQUEST, this will catch any status === 200 BUT request code < 0
  const resStatus = await res.status;
  const resData = await res.data;
  const resError = await res.error;

  // console.log('[hotelApiFetcher] LOGS:', { resStatus, resData, resError });
  if (resStatus === 200 && resData.code < 0)
    throw new Error(resData.message || resError);

  // IF NO ERROR, RETURN DATA
  return { data: res.data.data || res.data, status: res.status };
};
