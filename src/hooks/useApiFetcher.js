import useSWR from "swr";
import { hotelApiFetcher } from "../api";

const SWRoptions = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  loadingTimeout: 3000,
};

export const hotelSWRKeys = {
  hotelGeneral: "/",
  hotelById: "/:id",
};

export const useHotelApiFetcher = (customHookName = "", options = {}) => {
  const targetKey = hotelSWRKeys[customHookName];
  if (!targetKey)
    throw new Error("[useHotelApiFetcher]: custom hook (name) does not exist.");

  const finalTargetKey =
    targetKey.includes(":id") && options.id
      ? targetKey.replace(":id", options.id)
      : targetKey;

  const { data, mutate, error } = useSWR(
    [finalTargetKey, options],
    hotelApiFetcher,
    {
      ...SWRoptions,
      refreshInterval: options.refreshInterval || 0,
    }
  );
  // console.log('[useHotelApiFetcher] LOGS: ', { targetKey, data, error, isValidating });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
