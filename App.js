import './App.css';
import './MyComponents/Header.js';
import Header from './MyComponents/Header';
import About from './MyComponents/About';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from './MyComponents/Footer';
import Slideshow from './MyComponents/Slideshow';
import TopSection from './MyComponents/TopSection';

function App() {
  return (
  <>
  <Header/>
  <Router>
    <Routes>
    <Route exact path="/" element={<Slideshow/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>           
    </Routes>
  </Router>
  <Footer/>
  </>
  );
}

export default App;
