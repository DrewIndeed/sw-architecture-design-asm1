import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { localGet } from "../../auth";

const PageWrapper = ({ pathTitle, children }) => {
  // hooks
  const navigate = useNavigate();

  // check if already logged in
  useEffect(() => {
    const currentUser = localGet("currentUser");
    if (!currentUser) navigate("/");
    navigate(currentUser.path);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pathTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageWrapper;
