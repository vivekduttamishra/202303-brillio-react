import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';
import BookManageScreen from "./screens/book-manage-screen.components";
const App=(props)=>{
    return (
        <div>
            <NavigationBar title='World Wide Books'/>
            <div className='screen-container'>
                <BookManageScreen/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;