import './App.css';
// 1. Import the necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Your page imports
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs'; 
// You will also need to import your Navigation component
import Navigation from './components/Navigation';

function App() {
  return (
    // 2. Wrap everything in the Router component
    <Router>
      <div className="App">
        <Navigation /> {/* Place navigation here to show on all pages */}
        
        {/* 3. Define all your application's pages as routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Add other routes for your course pages, blog posts, etc. here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;