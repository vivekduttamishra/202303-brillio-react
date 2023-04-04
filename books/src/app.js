import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';
import BookListScreen from './screens/book-list-screen.component';
import BookDetailsScreen from "./screens/book-details-screen";
import BookAddScreen from "./screens/book-add-screen";

const App=(props)=>{
    return (
        <div>
            <NavigationBar title='World Wide Books'/>
            <div className='screen-container'>
                <BookAddScreen/>
                <BookListScreen/>
                <BookDetailsScreen/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;