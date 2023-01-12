import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Shoes from './pages/Shoes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
