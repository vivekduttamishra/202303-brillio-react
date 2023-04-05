import NavigationBar from "./components/navigation-bar.components";
import Footer from './components/footer.components';
import BookListScreen from './screens/book-list-screen.component';
import BookDetailsScreen from "./screens/book-details-screen";
import BookAddScreen from "./screens/book-add-screen";
import * as Consts from './consts';
import { useState } from "react";

const App=(props)=>{

    //var screen=Consts.SCREEN_BOOK_LIST;

    var [screen, navigate] = useState(Consts.SCREEN_BOOK_LIST);
    var [selectedBook,selectBook]=useState(null);

    const handleSelectBook=book=>{
        selectBook(book);
        navigate(Consts.SCREEN_BOOK_DETAILS);
    }

    return (
        <div>
            <NavigationBar title='World Wide Books' onNavigate={navigate} />
            <div className='screen-container'>

                {screen===Consts.SCREEN_BOOK_ADD && <BookAddScreen/>}

                {screen===Consts.SCREEN_BOOK_LIST && 
                    <BookListScreen
                        onSelectBook={handleSelectBook}                        
                    />
                    
                }
                {screen===Consts.SCREEN_BOOK_DETAILS && 
                
                    <BookDetailsScreen book={selectedBook}/>
                }
            </div>
            <Footer/>
        </div>
    );
};

export default App;