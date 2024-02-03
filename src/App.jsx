import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  const routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio/> },
        { path: "*", element: <h1>Page Is Not Found</h1> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
