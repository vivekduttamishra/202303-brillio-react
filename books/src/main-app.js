import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';


import {Outlet} from 'react-router-dom';


const MainApp = (props) => {

    return (
        <div>
            <NavigationBar title='World Wide Books'  />
            <div className='screen-container'>
               <Outlet/>              
            </div>
            <Footer />
        </div>
    );
};

export default MainApp;