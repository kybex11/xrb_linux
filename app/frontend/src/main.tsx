import {createRoot} from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    //Link
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: ( <App/> )
    },
])

//<Link to="about">About Us</Link>


createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );
