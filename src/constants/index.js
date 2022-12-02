import {
  GiSwanBreeze,
  GiGymBag,
  GiBeachBucket,
  GiPoolDive,
} from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdOutlineBalcony } from "react-icons/md";

export const TEST_ADMIN_1 = {
  username: "admin1",
  passwo: "admin1-pwd",
};

export const TEST_VISITOR_1 = {
  username: "visitor1",
  password: "visitor1-pwd",
};

export const TEST_DATA = {
  id: "hotel1",
  name: "The Princess of Arena Cam Ranh Home",
  description:
    "Located in Miếu Ông in the Khanh Hoa region, The Princess of Arena Cam Ranh Home has a balcony. Situated a few steps from Bai Dai Beach, the property features a garden and free private parking. The air-conditioned apartment consists of 1 bedroom, a kitchen and 1 bathroom. A flat-screen TV is available. A terrace is available for guests to use at the apartment. 100 Egg Mud Bath is 33 km from The Princess of Arena Cam Ranh Home, while Alexandre Yersin Museum is 40 km from the property. The nearest airport is Cam Ranh International Airport, 7 km from the accommodation. Couples particularly like the location — they rated it 9.6 for a two-person trip. The Princess of Arena Cam Ranh Home has been welcoming Booking.com guests since 8 Sept 2022.",
  address:
    "26H7+WRQ, Nguyễn Tất Thành, Cam Hải Đông, Tp. Cam Ranh, Khánh Hòa 57000, Vietnam",
  latitude: "12.030028066141059",
  longtitude: "109.21458420980113",
  owner: {
    name: "",
    email: "",
    phone: "+84903358623",
  },
  checkInTime: {
    from: "14:00",
    to: "22:00",
  },
  checkOutTime: {
    from: "08:00",
    to: "12:00",
  },
  photos: [
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/12972/1297278/1297278208/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/13014/1301469/1301469511/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/13005/1300519/1300519867/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/12903/1290370/1290370885/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/12972/1297278/1297278358/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/12972/1297278/1297278232/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
    "https://the-princess-of-arena-cam-ranh-home-mieu-ong-vn-1.booked.net/data/Photos/r3360x1486/13014/1301473/1301473507/The-Princess-Of-Arena-Cam-Ranh-Home-Mieu-Ong-Exterior.JPEG",
  ],
  houseRules: [
    {
      name: "Smoking",
      value: false,
    },
    {
      name: "Pets",
      value: false,
    },
    {
      name: "Parties/Events",
      value: false,
    },
    {
      name: "Cash Only",
      value: true,
    },
    {
      name: "Check in Age",
      value: false,
    },
    {
      name: "Children and Beds",
      value:
        "Children of any age are welcome. Children aged 18 years and above are considered adults at this property.To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
    },
  ],
  utilities: ["AC", "Terrace", "Pool", "Gym", "Restaurant", "Beach"],
  allRooms: {
    single: {
      capacity: 2,
      size: 36,
      rate: 100,
      quantity: 5,
      available: 5,
      data: [
        {
          id: "s1",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "s2",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "s3",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "s4",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "s5",
          status: 0,
          startDate: "",
          endDate: "",
        },
      ],
    },
    double: {
      capacity: 4,
      size: 72,
      rate: 200,
      quantity: 5,
      available: 5,
      data: [
        {
          id: "d1",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "d2",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "d3",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "d4",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "d5",
          status: 0,
          startDate: "",
          endDate: "",
        },
      ],
    },
    seaView: {
      capacity: 6,
      size: 72,
      rate: 300,
      quantity: 5,
      available: 5,
      data: [
        {
          id: "sea1",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "sea2",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "sea3",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "sea4",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "sea5",
          status: 0,
          startDate: "",
          endDate: "",
        },
      ],
    },
    parkView: {
      capacity: 8,
      size: 48,
      rate: 400,
      quantity: 5,
      available: 5,
      data: [
        {
          id: "park1",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "park2",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "park3",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "park4",
          status: 0,
          startDate: "",
          endDate: "",
        },
        {
          id: "park5",
          status: 0,
          startDate: "",
          endDate: "",
        },
      ],
    },
  },
};

export const UTILITIES_MAP = {
  AC: GiSwanBreeze,
  Terrace: MdOutlineBalcony,
  Pool: GiPoolDive,
  Gym: GiGymBag,
  Restaurant: IoRestaurantSharp,
  Beach: GiBeachBucket,
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
