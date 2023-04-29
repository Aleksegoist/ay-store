import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
//pages
import { Cart, Category, Home } from './pages/index';
//components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
