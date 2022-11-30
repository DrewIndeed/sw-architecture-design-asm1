import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogoForDark } from "../../assets";
import { Dropdown, Space, message } from "antd";
import { DownOutlined, PoweroffOutlined } from "@ant-design/icons";
import { CenterFlex } from "../containers";
import { localClear } from "../../auth";

const NavBar = () => {
  // hooks
  const navigate = useNavigate();

  // handle logout
  const onLogOut = (e) => {
    e.preventDefault();
    message.success("Logged out. See you soon!");
    localClear();
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };

  const items = [
    {
      label: (
        <button onClick={onLogOut} className="flex align-middle">
          Log Me Out <PoweroffOutlined className="pt-[4px] ml-2" />
        </button>
      ),
      key: "0",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: [-175, -150, -100, -50, 0] }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className=" 
      z-100 sticky top-0 bg-[#29353ad0] hover:bg-[#29353a] 
      transition-all flex justify-between align-middle ease-linear 
      px-10 md:px-16 py-3 mx-auto z-[100] xl:items-center
      "
    >
      <img src={LogoForDark} alt="logo for dark" className="w-[200px]" />
      <CenterFlex>
        <button
          type="primary"
          className="bg-[#ff5252] text-white text-[1rem] px-8 py-3 rounded-md"
        >
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                More
                <DownOutlined className="mb-[6px]" />
              </Space>
            </a>
          </Dropdown>
        </button>
      </CenterFlex>
    </motion.div>
  );
};

export default NavBar;
