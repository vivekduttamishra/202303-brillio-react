import { Component } from 'react';
import BookDetailsComponent from '../components/book-details.component';
import BookListComponent from '../components/book-list.component';
import bookManager from '../services/simple-book-manager';

class BookManageScreen extends Component {

    constructor(props){
        super(props);

        this.state={
            selectedBook:null
        }
    }


    render = () => {

        var books = bookManager.getAllBooks();

        var containerStyle = {
            padding: '10px'
        }

        const selectBook= book=>{
            this.setState({selectedBook:book});
        }

        return (
            <div style={containerStyle}>
                <h2>Recommended Books</h2>
                <p>Here is a list of {books.length}  of our favourite books</p>
                <div className='row'>
                    <div className='col col-3'>
                        <BookListComponent 
                                books={books} 
                                onSelect={selectBook}    
                            />
                    </div>
                    <div className='col col-9'>
                        <BookDetailsComponent book={this.state.selectedBook} />
                    </div>
                </div>
            </div>
        );
    }

}

export default BookManageScreen;