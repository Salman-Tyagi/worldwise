import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';

export default function App() {
  return (
    <div>
      <h1>Worldwise</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
