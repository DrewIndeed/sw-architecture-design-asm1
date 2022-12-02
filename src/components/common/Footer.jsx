import React from "react";
import { LogoForDarkWhite } from "../../assets";
import { CenterFlex } from "../containers";

const Footer = () => {
  return (
    <CenterFlex className="h-[90vh] bg-black">
      <CenterFlex gap="35px" direction="column">
        <img
          src={LogoForDarkWhite}
          alt="Logo for dark at footer"
          className="w-[200px] object-contain"
        />
        <p className="text-white/40 text-[16px]">
          Copyright © 2022 CamRanhPrincess. All Rights Reserved.
        </p>
      </CenterFlex>
    </CenterFlex>
  );
};

export default Footer;
