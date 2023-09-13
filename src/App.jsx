import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import ProtectRoute from './Pages/ProtectedRoute';

import { AuthProvider } from './contexts/AuthContext';
import { CitiesProvider } from './contexts/CititesContext';

export default function App() {
  return (
    <div>
      <CitiesProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />

              <Route path='pricing' element={<Pricing />} />

              <Route path='product' element={<Product />} />

              <Route path='login' element={<Login />} />

              <Route
                path='app'
                element={
                  <ProtectRoute>
                    <AppLayout />
                  </ProtectRoute>
                }
              >
                <Route index element={<Navigate to='cities' />} />

                <Route path='cities' element={<CityList />} />

                <Route path='cities/:id' element={<City />} />

                <Route path='countries' element={<CountryList />} />

                <Route path='form' element={<Form />} />
              </Route>

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CitiesProvider>
    </div>
  );
}
