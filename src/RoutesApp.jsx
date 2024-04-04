
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MyJob from './pages/MyJob'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'


const App= createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {path:'/', element: <Home/>},
            {path:'/myjob', element: <MyJob/>},
            {path:'/profile', element: <Profile/>},
        ]
    }
])

export default App