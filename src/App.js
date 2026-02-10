import './styles/bootstrap-grid.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import CookingPage from './pages/CookingPage';
import RestaurantPage from './pages/RestaurantPage';
import RecipeList from './data/Recipes'

function App() {
  return (
    <Router>
      <div className="App bg-primary-dark">
        <Routes>
          {/* The default page people see first */}
          <Route path="/" element={<Landing />} />

          {/* The cuisine selection page */}
          <Route path="/cook" element={<CookingPage />} />

          <Route path="/recipes" element={<RecipeList />} />

          {/* The page that displays the Spoonacular results */}
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;