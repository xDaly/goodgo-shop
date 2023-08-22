import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Redirect from './utils/Redirect';
import Loading from './components/Loading';
import App from './App';
import SubCategories from './pages/Categories/SubCategories';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Main = React.lazy((): any => import('./pages/Main').then(({ Main }) => ({ default: Main })))
const Dashboard = React.lazy((): any => import('./pages/Dashboard').then(({ default: Dashboard }) => ({ default: Dashboard })))
const Categories = React.lazy((): any => import('./pages/Categories/Categories').then(({ default: Categories }) => ({ default: Categories })))
const Login = React.lazy((): any => import('./pages/Auth/Login').then(({ default: Login }) => ({ default: Login })))




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Redirect route="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="subcategories" element={<SubCategories />} />

        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);


root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
