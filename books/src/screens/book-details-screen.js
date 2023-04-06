import bookManager from '../services/api-book-manager';
import BookDetails from '../components/book-details.component';
import withVisibility from '../hoc/with-visibility';
import Loader from '../components/loader.component';
import {useParams} from 'react-router-dom';
import {E404Component} from './e404-screen-component';
import { useEffect, useState } from 'react';

const BookDetailsScreen=()=>{

    var [book,setBook]=useState(null); //null means no book yet
    var {id}=useParams();

    

    useEffect(() => {


        const loadBookById=async ()=>{
            var _b= await bookManager.getBookById(id);
            setBook(_b);
        }

        loadBookById();

       
    }, [id]);

    
    
    if(book===undefined){ //book is not found
        return <E404Component message={`No Book with id: ${id}`} />
    }


    return (
        <div>
            <Loader show={book===null} />
            <BookDetails book={book} visible={book!==null} />
        </div>
    );
}

export default withVisibility( BookDetailsScreen);