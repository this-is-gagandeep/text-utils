import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import About from './components/About';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
