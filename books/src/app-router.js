
import BookListScreen from './screens/book-list-screen.component';
import BookAddScreen from './screens/book-add-screen';
import BookDetailsScreen from './screens/book-details-screen';
import AuthorListScreen from './screens/author-list-screen.component';
import AuthorDetailsScreen from './screens/author-details-screen.component';
import AuthorAddScreen from './screens/author-add-screen.component';
import UserLoginScreen from './screens/user-login-screen.component';
import UserRegisterScreen from './screens/user-register-screen.component';
import HomeScreen from './screens/home-screen.component';
import E404Screen from './screens/e404-screen-component';

import { createBrowserRouter } from 'react-router-dom';
import MainApp from './main-app';

const router = createBrowserRouter([

   {
      path: '',
      element: <MainApp />,  
      errorElement:<E404Screen/>,    

      children: [
         {
            path:'',
            element:<HomeScreen/>
         },
         {
            path: '/book/list',
            element: <BookListScreen />
         },
         {
            path: '/book/add',
            element: <BookAddScreen />
         },
         {
            path: '/book/details',
            element: <BookDetailsScreen />
         },

         {
            path: '/author/list',
            element: <AuthorListScreen />
         },
         {
            path: '/author/add',
            element: <AuthorAddScreen />
         },
         {
            path: '/author/details',
            element: <AuthorDetailsScreen />
         },

         {
            path: '/user/login',
            element: <UserLoginScreen />
         },
         {
            path: '/user/register',
            element: <UserRegisterScreen />
         },

         {
            path: '/e404',
            element: <E404Screen />
         },

      ]
   },
 
]);

export default router;