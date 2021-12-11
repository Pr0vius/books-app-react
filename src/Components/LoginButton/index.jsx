import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { google } from "../../config";
import { userContext } from "../../context/user";

const LoginButton = ({onLogin}) => {
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
    onLogin();
  };
  return (
    <GoogleLogin
      buttonText="Login with Google"
      onSuccess={responseLogin}
      clientId={google.clientId}
      isSignedIn={true}
      onFailure={e => console.log(e)}
      scope="https://www.googleapis.com/auth/books"
      // cookiePolicy="same-origin-allow-popups"
      // hostedDomain="https://briandelgado00.000webhostapp.com/"
      
    />
  );
};

export default LoginButton;
