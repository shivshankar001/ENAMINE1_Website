// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home/JS/Home';
import AboutUs from './About Us/AboutUs';
import Skills from './Skills/Skills';
import College from './College/College';
import ContactUs from './Contact Us/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='about' exact Component={AboutUs} />
        <Route path='skills' exact Component={Skills} />
        <Route path='college' exact Component={College} />
        <Route path='contact-us' exact Component={ContactUs} />
      </Routes>
    </div>
  );
}

export default App;
