import {createRoot} from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    //Link
} from 'react-router-dom';
import Studio from './components/menu/views/studio';
import Settings from './components/menu/views/settings';

const router = createBrowserRouter([
    {
        path: "/",
        element: ( <App/> )
    },
    {
        path: "/studio",
        element: ( <Studio/> )
    },
    {
        path: "/settings",
        element: ( <Settings/> )
        
    }
])

//<Link to="about">About Us</Link>


createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );
