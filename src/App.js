import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./views/Homepage/HomePage";
import MoviePage from "./views/Moviepage/MoviePage";
import CategoriesPage from './views/CategoriesPage/CategoriesPage'
import CategoriePage from "./views/CategoriePage/CategoriePage";
import PopularsPage from "./views/PopularsPage/Populars";
import SeriesPage from "./views/SeriesPage/SeriesPage";
import SeriePage from "./views/SeriePage/SeriePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/Series" element={<SeriesPage />} />
          <Route path="/Populars" element={<PopularsPage />} />
          <Route path={"/Categories/:cat"} element={<CategoriePage />} />
          <Route path={"/MoviePage/:id"} element={<MoviePage />} />
          <Route path={"/SeriePage/:id"} element={<SeriePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
