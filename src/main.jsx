import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import PagesToRead from './Pages/PagesToRead';
import Listedbook from './Pages/Listedbook.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';
import ReadBooks from './Components/ReadBooks/ReadBooks.jsx';
import WishList from './Components/WhishList/WishList.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/pagesToread',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/listedBooks',
        element: <Listedbook></Listedbook>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },

          {
            path: 'Wishlist',
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: '/details/:bookId',
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
