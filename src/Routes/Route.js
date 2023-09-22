import {createBrowserRouter} from 'react-router-dom';
import Main from '../Components/Layout/Main';
import Home from '../Components/Pages/Home/Home';
import Category from '../Components/Pages/Category/Category';
import News from '../Components/Pages/News/News';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TermsAndCondition from '../Components/Pages/Others/TermsAndCondition/TermsAndCondition';
import Profile from '../Components/Pages/Others/Profile/Profile';

export const routes = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/news')
        },

        {
            path:'/category/:id',
            element:<Category></Category>,
            loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        // Ei khan e loader e {} hobe na. {} dily error dicce.    
        },
        {
            path:'/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/terms',
            element:<TermsAndCondition></TermsAndCondition>
        },
        {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        }
    ]
}
])