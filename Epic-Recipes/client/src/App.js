import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SearchResults  from './pages/SearchResults';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/search/:query" element={<SearchResults/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
