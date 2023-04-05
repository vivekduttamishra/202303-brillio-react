import bookManager from '../services/simple-book-manager';
import BookDetails from '../components/book-details.component';
import withVisibility from '../hoc/with-visibility';


import {useParams} from 'react-router-dom';
import {E404Component} from './e404-screen-component';

const BookDetailsScreen=()=>{

    var {id}=useParams();

    console.log('id',id);
    
    var book= bookManager.getBookById(id);

    if(book===undefined){
        return <E404Component message={`No Book with id: ${id}`} />
    }


    return (
        <BookDetails book={book}/>
    );
}

export default withVisibility( BookDetailsScreen);