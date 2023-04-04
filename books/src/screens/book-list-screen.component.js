
import bookManager from '../services/simple-book-manager';
import BookGrid from '../components/book-grid.component';
import withBorder from '../hoc/with-border';
import withVisibility from '../hoc/with-visibility';

const BookListScreen=({onSelectBook})=>{

    var books= bookManager.getAllBooks();

    return (
        <div>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>
            <BookGrid books={books} onSelectBook={onSelectBook} />
        </div>
    );
}

export default withVisibility( BookListScreen);