import { createContext, useEffect, useState, useContext } from "react";
import { bookshelvesIdList } from "../services/fetch";
import { userContext } from "./user";

export const bookshelveContext = createContext({});

const BookshelvesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [finished, setFinished] = useState([]);
  const [reading, setReading] = useState([]);
  const [toRead, setToRead] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    const fetchData = (shelve, stateUpdater) => {
      bookshelvesIdList(shelve, user.accessToken).then(res => {
        const idList = res.items.map(e => e.id);
        stateUpdater(idList);
      });
    };

    const allBS = () => {
      fetchData("FAVORITES", setFavorites);
      fetchData("FINISHED", setFinished);
      fetchData("READING", setReading);
      fetchData("FINISHED", setToRead);
    };

    user.auth && allBS();
  }, [user]);

  const values = {
    favorites: { data: favorites, setData: setFavorites },
    finished: { data: finished, setData: setFinished },
    reading: { data: reading, setData: setReading },
    toRead: { data: toRead, setData: setToRead },
  };

  return (
    <bookshelveContext.Provider value={values}>
      {children}
    </bookshelveContext.Provider>
  );
};

export default BookshelvesProvider;
