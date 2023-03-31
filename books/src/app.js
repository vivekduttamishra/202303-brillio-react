import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';
const App=(props)=>{
    return (
        <div>
            <NavigationBar title='World Wide Books'/>
            <div className='screen-container'>
                <h2>Recommended Books</h2>
            </div>
            <Footer/>
        </div>
    );
};

export default App;