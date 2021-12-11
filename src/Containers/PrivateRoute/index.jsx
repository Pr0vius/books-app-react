import React, { useContext } from "react";
import ScreenMessage from "../../Components/ScreenMessage";
import { userContext } from "../../context/user";

const Private = ({component: Component}) => {
  const { user } = useContext(userContext);
  return user.auth ? <Component />: <ScreenMessage message="Please Login to access this page" />;
};

export default Private;
