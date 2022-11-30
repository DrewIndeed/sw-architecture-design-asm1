export const HOTEL_MODEL = {
  name: "",
  address: "",
  coordinates: {
    latitude: "",
    longitude: "",
  },
  owner: {
    name: "",
    email: "",
    phone: "",
  },
  allRooms: [],
  houseRules: [],
  checkInTime: "",
  checkOutTime: "",
  photos: [],
  utilities: [],
};

export const UTILITIES_ENUM = [
  "AC",
  "Terrace",
  "Pool",
  "Gym",
  "Restaurant",
  "Beach",
];

export const PHOTO_MODEL = {
  type: "",
  alt: "",
  url: "",
};

export const ROOM_MODEL = {
  name: "",
  size: "",
  rate: "",
  quantity: 0,
};
