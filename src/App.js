import './App.scss';
import About from './components/About/About';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Home />, <Navbar /></div>
  },
  {
    path: '/about',
    element: <div><About />, <Navbar /></div>
  },

  {
    path: '/services',
    element: <div><Service />, <Navbar /></div>
  },

  {
    path: '/contact',
    element: <div><Contact />, <Navbar /></div>
  },

  {
    path: '/login',
    element: <div><Login /></div>
  },

  {
    path: '/register',
    element: <div><Register /></div>
  }

])

function App() {

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
