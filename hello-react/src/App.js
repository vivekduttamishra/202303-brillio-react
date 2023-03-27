import { HomeScreen } from "./screens/home-screen.component"
import AppHeader from './components/app-header.component';

var books=[
    {title:'The Accursed God',author:'Vivek Dutta Mishra'},
    {title:'Rashmirathi',author:'Ramdhari Sing Dinkar'},
    
    {title:'Manas',author:'Vivek Dutta Mishra'},
    {title:'Kurukshetra',author:'Ramdhari Sing Dinkar'},
    

];

var App = () => {
    return <div>
        <AppHeader title='World Wide Books' 
                slogan='Official Home Page of all books of the world' 
                />
        <HomeScreen books={books} />
    </div>;
};

export default App;