import { createContext, useState } from "react";

export const userContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    id: "",
    name: "",
    img: "",
    email: "",
    username: "",
    tokenId: "",
    accessToken: "",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
