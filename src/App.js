import "./App.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/responsive.css";
import Blogs from "./Pages/Blogs";
import CourseFee from "./Pages/CourseFee";
import ThankYou from "./Pages/ThankYou";
import BlogOne from "./blogs/BlogOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/course-and-fee" element={<CourseFee />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route
            path="/blog/10-proven-techniques-to-improve-your-exam-scores"
            element={<BlogOne />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
