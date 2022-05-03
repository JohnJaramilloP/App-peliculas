import {
  Routes,
  Route,
} from "react-router-dom";
import Terror from "../terror/Terror";
import Accion from "../accion/Accion";
import SearchScreen from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";
import MovieScreen from "../movie/MovieScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="accion" element={<Accion />} />
        <Route path="terror" element={<Terror />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="movie/:movieId" element={<MovieScreen />} />
        <Route path="/" element={<Accion />} />
      </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
