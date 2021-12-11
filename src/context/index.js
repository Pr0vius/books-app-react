import UserProvider from "./user";
import BookshelvesProvider from "./bookshelves";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BookshelvesProvider>{children}</BookshelvesProvider>
    </UserProvider>
  );
};

export default Providers;
