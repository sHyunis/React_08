// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Movies from './routes/movies/Movies';
import Coins from './routes/coins/Coins';
import Navbars from './components/navbars/Navbars';

function App() {
  return (
    <div className="App">
      <Navbars />
      {
        // 이렇게 하면 메뉴를 불러옴
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/coins' element={<Coins />} />
      </Routes>
    </div>
  );
}

export default App;
