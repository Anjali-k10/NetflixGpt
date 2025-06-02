import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import NotFound from "./NotFound";
import GptSearchPage from "./GptSearchPage";
import HeaderLayout from "./HeaderLayout";
import MovieDetailsPage from "./MovieDetailsPage";

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HeaderLayout />}>
          <Route path="/browse" element={<Browse />} />
          <Route path="/search" element={<GptSearchPage />} />
        </Route>
       <Route path="/moviedetails/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Body;
