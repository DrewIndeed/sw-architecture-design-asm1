import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { localGet } from "../../auth";
import { NavBar } from "../common";

const PageWrapper = ({
  pathTitle = "",
  hasNav = false,
  children = null,
  isLoading = false,
}) => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();

  // check if already logged in
  useEffect(() => {
    const currentUser = localGet("currentUser");
    if (currentUser === null && location.pathname !== "/") {
      navigate("/", { replace: true });
      return;
    }

    // if current path is valid comparing to current user path, navigate to URL
    // else, navigate back to home of the current type of user
    navigate(
      (location.pathname.includes("admin") &&
        currentUser?.path.includes("admin")) ||
        (location.pathname.includes("visitor") &&
          currentUser?.path.includes("visitor"))
        ? location.pathname
        : currentUser?.path,
      { replace: true }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>{pathTitle}</title>
      </Helmet>
      {hasNav && <NavBar />}
      {isLoading && <Skeleton active />}
      {!isLoading && children}
    </>
  );
};

export default PageWrapper;
