import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/app' element={<AppLayout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
