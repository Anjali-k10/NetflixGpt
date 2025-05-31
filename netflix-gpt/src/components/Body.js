
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Browse from "./Browse";
import NotFound from "./NotFound";


const Body = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}; 


export default Body
