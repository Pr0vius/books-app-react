import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { google } from "../../config";
import { userContext } from "../../context/user";

const LoginButton = () => {
  const { setUser } = useContext(userContext);

  const responseLogin = res => {
    setUser({
      auth: true,
      id: res.googleId,
      name: res.profileObj.name,
      img: res.profileObj.imageUrl,
      email: res.profileObj.email,
      username: res.profileObj.email.split("@")[0],
      tokenId: res.tokenId,
      accessToken: res.accessToken,
    });
  };
  return (
    <GoogleLogin
      buttonText="Login with Google"
      onSuccess={responseLogin}
      onFailure={() => alert("Login Failed")}
      clientId={google.clientId}
      isSignedIn={true}
      
    />
  );
};

export default LoginButton;
