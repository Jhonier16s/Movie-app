import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./views/Homepage/HomePage";
import MoviePage from "./views/Moviepage/MoviePage";
import CategoriesPage from './views/CategoriesPage/CategoriesPage'
import CategoriePage from "./views/CategoriePage/CategoriePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path={"/Categories/:cat"} element={<CategoriePage />} />
          <Route path={"/MoviePage/:id"} element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
