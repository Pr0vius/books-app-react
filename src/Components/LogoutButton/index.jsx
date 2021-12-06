import React, { useContext } from "react";
import { useGoogleLogout } from "react-google-login";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router";
import { google } from "../../config";
import { userContext } from "../../context/user";
import "./style.css";

const LogoutButton = () => {
  const { signOut } = useGoogleLogout({ clientId: google.clientId });
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleClick = evt => {
    evt.preventDefault();
    setUser({
      auth: false,
      id: "",
      name: "",
      img: "",
      email: "",
      username: "",
      tokenId: "",
      accessToken: "",
    });
    signOut();
    navigate("/");
  };

  return (
    <button className="logout_btn" onClick={handleClick}>
      <FaPowerOff />
    </button>
  );
};

export default LogoutButton;
