
import bookManager from '../services/simple-book-manager';
import BookGrid from '../components/book-grid.component';

const BookListScreen=(props)=>{

    var books= bookManager.getAllBooks();

    return (
        <div>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>
            <BookGrid books={books}/>
        </div>
    );
}

export default BookListScreen;