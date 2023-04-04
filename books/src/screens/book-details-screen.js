import bookManager from '../services/simple-book-manager';
import BookDetails from '../components/book-details.component';


const BookDetailsScreen=(props)=>{

    var book=bookManager.getBookById('the-accursed-god');


    return (
        <BookDetails book={book}/>
    );
}

export default BookDetailsScreen;