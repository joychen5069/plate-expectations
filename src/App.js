import './styles/bootstrap-grid.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import CookingPage from './pages/CookingPage';
import RestaurantPage from './pages/RestaurantPage';
import RecipeList from './pages/RecipesList';
import RecipeDetails from './pages/RecipeDetailsPage';

function App() {
  return (
    <Router>
      <div className="App bg-primary-dark">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/cook" element={<CookingPage />} />

          <Route path="/recipes" element={<RecipeList />} />

          <Route path="/recipe-details" element={<RecipeDetails />} />

          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;