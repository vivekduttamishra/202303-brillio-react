import {useState} from 'react';
import BookDetailsComponent from '../components/book-details.component';
import BookListComponent from '../components/book-list.component';
import bookManager from '../services/simple-book-manager';

var BookManageScreen = () => {

    var [selectedBook, setSelectedBook]=useState(null);

    var books = bookManager.getAllBooks();

    const selectBook = book => {
        //this.setState({ selectedBook: book });
        setSelectedBook(book);
    }

    var containerStyle = {
        padding: '10px'
    }


    return (
        <div style={containerStyle}>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>
            <div className='row'>
                <div className='col col-3'>
                    <BookListComponent
                        books={books}
                        selectedBook={selectedBook}
                        onSelect={selectBook}
                    />
                </div>
                <div className='col col-9'>
                    <BookDetailsComponent book={selectedBook} />
                </div>
            </div>
        </div>
    );
}



export default BookManageScreen;