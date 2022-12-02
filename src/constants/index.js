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
  password: "admin1-pwd",
};

export const TEST_VISITOR_1 = {
  username: "visitor1",
  password: "visitor1-pwd",
};

export const UTILITIES_MAP = {
  AC: GiSwanBreeze,
  Terrace: MdOutlineBalcony,
  Pool: GiPoolDive,
  Gym: GiGymBag,
  Restaurant: IoRestaurantSharp,
  Beach: GiBeachBucket,
};
