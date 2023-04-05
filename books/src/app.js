import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';


import {RouterProvider} from 'react-router-dom';
import router from './app-router'


const App = (props) => {
    
    
    return (
       <RouterProvider router={router} />
    );
};

export default App;