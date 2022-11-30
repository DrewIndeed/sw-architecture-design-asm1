export const TEST_ADMIN_1 = {
  username: "admin1",
  password: "admin1-pwd",
};

export const TEST_VISITOR_1 = {
  username: "visitor1",
  password: "visitor1-pwd",
};

export const HOTEL_MODEL = {
  id: "",
  name: "",
  description: "",
  address: "",
  latitude: "",
  longtitude: "",
  owner: {
    name: "",
    email: "",
    phone: "",
  },
  checkInTime: {
    from: "",
    to: "",
  },
  checkOutTime: {
    from: "",
    to: "",
  },
  photos: [],
  houseRules: [],
  utilities: [],
  allRooms: {},
};

export const UTILITIES_ENUM = [
  "AC",
  "Terrace",
  "Pool",
  "Gym",
  "Restaurant",
  "Beach",
];

export const ROOM_MODEL = {
  name: "",
  size: "",
  rate: "",
  quantity: 0,
  status: 0, // 0 available, 1 booked
  startDate: "",
  endDate: "",
};

export const USER = {
  username: "",
  type: "",
};

export const PHOTO_MODEL = {
  type: "",
  alt: "",
  url: "",
};
