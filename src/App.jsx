import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CitiesProvider } from './contexts/CititesContext';
import ProtectRoute from './Pages/ProtectedRoute';

const HomePage = lazy(() => import('./Pages/HomePage'));
const Pricing = lazy(() => import('./Pages/Pricing'));
const Product = lazy(() => import('./Pages/Product'));
const Login = lazy(() => import('./Pages/Login'));
const AppLayout = lazy(() => import('./Pages/AppLayout'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));

// import HomePage from './Pages/HomePage';
// import Pricing from './Pages/Pricing';
// import Product from './Pages/Product';
// import Login from './Pages/Login';
// import AppLayout from './Pages/AppLayout';
// import PageNotFound from './Pages/PageNotFound';

// dist/assets/index-137c5f26.css   31.58 kB │ gzip:   5.26 kB
// dist/assets/index-54662578.js   526.41 kB │ gzip: 149.10 kB

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

export default function App() {
  return (
    <div>
      <CitiesProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
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
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </CitiesProvider>
    </div>
  );
}
