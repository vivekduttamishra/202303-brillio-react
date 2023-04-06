
import BookGrid from '../components/book-grid.component';
import withBorder from '../hoc/with-border';
import withVisibility from '../hoc/with-visibility';

import bookManager from '../services/async-book-manager';

import { useEffect } from 'react';

const BookListScreen=()=>{

    useEffect(() => {
        console.log('use effect called for BookListScreen');
    });

    console.log('book list screen main body render');

    //var books= bookManager.getAllBooks();
    var books=[];
    console.log('books',books);
    

    return (
        <div>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>
            <BookGrid books={books}  />
        </div>
    );
}

export default withVisibility( BookListScreen);