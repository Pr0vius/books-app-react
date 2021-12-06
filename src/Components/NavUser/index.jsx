import React, { useContext } from "react";
import { userContext } from "../../context/user";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import "./style.css";

const NavUser = () => {
  const { user } = useContext(userContext);

  return (
    <div className="nav-user">
      {!user.auth ? (
        <div className="nav-user__container">
          <LoginButton />
        </div>
      ) : (
        <>
          <div className="nav-user__container">
            <img src={user.img} alt={user.name} className="nav-user__img" />
            <p className="nav-user__username">{user.name}</p>
          </div>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default NavUser;
