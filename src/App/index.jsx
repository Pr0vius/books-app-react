import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Containers/Layout";
import Favorites from "../Pages/Favorites";
import HaveRead from "../Pages/HaveRead";
import Home from "../Pages/Home";
import Reading from "../Pages/Reading";
import Reviewed from "../Pages/Reviewed";
import EBooks from "../Pages/MyEbooks";
import "./style.css";
import Purchased from "../Pages/Purchased";
import SearchPage from "../Pages/SearchPage";
import Book from "../Pages/Book";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="purchased" element={<Purchased />} />
            <Route path="reading" element={<Reading />} />
            <Route path="finished" element={<HaveRead />} />
            <Route path="reviewed" element={<Reviewed />} />
            <Route path="ebooks" element={<EBooks />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="book">
              <Route path=":id" element={<Book />}/>
            </Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
