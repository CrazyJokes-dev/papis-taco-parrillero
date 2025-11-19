import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateFood from './components/CreateFood';
import ShowFoodList from './components/ShowFoodList';
import ShowFoodDetails from './components/ShowFoodDetails';
import UpdateFoodInfo from './components/UpdateFoodInfo';
import LocationHoursPage from './components/LocationHoursPage';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowFoodList />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/location-and-hours' element={<LocationHoursPage />} />
          <Route path='/create-Food' element={<CreateFood />} />
          <Route path='/edit-Food/:id' element={<UpdateFoodInfo />} />
          <Route path='/show-Food/:id' element={<ShowFoodDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;