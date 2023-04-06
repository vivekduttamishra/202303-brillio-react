
import BookGrid from '../components/book-grid.component';
import withBorder from '../hoc/with-border';
import withVisibility from '../hoc/with-visibility';

import bookManager from '../services/api-book-manager';

import { useEffect, useState } from 'react';
import Loader from '../components/loader.component';

const BookListScreen=()=>{

    var [books,setBooks] = useState(null);

    useEffect(() => {

        bookManager
                .getAllBooks()
                .then((books)=>{
                    console.log('books',books);
                    setBooks(books);
                })

    },[]);


    
    

    return (
        <div>            
            <h2>Recommended Books</h2>
            <Loader show={books===null} message='fetching recommendations...' />
            
            <BookGrid books={books} visible={books!==null}  />
        </div>
    );
}

export default withVisibility( BookListScreen);