import bookManager from '../services/simple-book-manager';
import BookDetails from '../components/book-details.component';
import withVisibility from '../hoc/with-visibility';


const BookDetailsScreen=({book})=>{

    


    return (
        <BookDetails book={book}/>
    );
}

export default withVisibility( BookDetailsScreen);