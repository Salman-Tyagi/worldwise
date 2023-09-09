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
          <Route index element={<HomePage />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='product' element={<Product />} />
          <Route path='login' element={<Login />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<p>Cities</p>} />
            <Route path='cities' element={<p>Cities</p>} />
            <Route path='countries' element={<p>Countries</p>} />
            <Route path='form' element={<p>Form</p>} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
