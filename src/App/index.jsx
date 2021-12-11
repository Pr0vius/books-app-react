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
import Pending from "../Pages/Pending";
import Private from "../Containers/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="favorites" element={<Private component={Favorites}/>} />
            <Route path="purchased" element={<Private component={Purchased} />} />
            <Route path="reading" element={<Private component={Reading} />} />
            <Route path="finished" element={<Private component={HaveRead} />} />
            <Route path="reviewed" element={<Private component={Reviewed} />} />
            <Route path="ebooks" element={<Private component={EBooks} />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="pendings" element={<Private component={Pending} />} />
            <Route path="book">
              <Route path=":id" element={<Book />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
