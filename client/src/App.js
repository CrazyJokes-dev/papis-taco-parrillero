import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LocationHoursPage from './components/LocationHoursPage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/location-and-hours' element={<LocationHoursPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;