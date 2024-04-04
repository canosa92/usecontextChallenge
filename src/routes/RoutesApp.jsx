import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import NavBar from '../components/Navbar'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/myjob', element: <MyJob /> },
            { path: '/profile', element: <Profile /> },
        ]
    }
]);

export default Router;
