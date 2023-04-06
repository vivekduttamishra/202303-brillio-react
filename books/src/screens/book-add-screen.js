import { useState } from "react";
import withBorder from "../hoc/with-border";
import withVisibility from "../hoc/with-visibility";
import {required,range,stringLength,validate} from '../services/validation';
import Input from '../components/input.components';
import bookManager from '../services/api-book-manager';

import {useNavigate} from 'react-router-dom';


const intValue= value=>{
    var v= parseInt(value);
    if(isNaN(v))
        throw new Error(`${value} should be a number`);
}

const BookAddScreen=(props)=>{

    var [book,setBook] = useState({
        id:'',
        title:'',
        author:'',
        rating:'',
        price:0,
        description:'',
        cover:''        
    });

    var bookValidationModel={
        id:[required()],
        title:[required()],
        author:[required()],
        rating:[required(),intValue, range(1,5)],
        price:[required(),range(0,5000)],
        description:[required(),stringLength(0,20)],
        cover:[required()] 
    };

    var [status,setStatus]=useState('');

    var [error,setError]=useState(null);

    var navigate=useNavigate();

    const handleModelChange=(value,id)=>{
        var _model= {...book};
        _model[id]=value;
        setBook(_model);

        var _e = validate(_model,bookValidationModel);
        setError(_e);
    }

    const handleSave=async ()=>{
        //console.log('book',book);
        setStatus('saving the book...');
        await bookManager.addBook(book);
        setStatus('book is saved');
        navigate('/book/list');
        
    }

    return (
        <div className='book-add-div'>
            <h2> Add New Book</h2>
            <form>
                <div className='row'>
                    <div className='col col-6'>
                        <Input id="id" value={book.id} error={error?.id} onValueChange={handleModelChange} />
                    </div>
                    <div className='col col-6'>

                    </div>
                </div>

                <div className='row'>
                    <div className='col col-6'>
                        <Input id="title" value={book.title} error={error?.title} onValueChange={handleModelChange} />
                        
                    </div>
                    <div className='col col-6'>
                        <Input id="author" value={book.author} error={error?.author} onValueChange={handleModelChange} />

                    </div>
                </div>

                <div className='row'>
                    <div className='col col-6'>
                        <Input id="price" value={book.price} error={error?.price} onValueChange={handleModelChange} />
                        
                    </div>
                    <div className='col col-6'>
                        <Input id="rating" value={book.rating} error={error?.rating} onValueChange={handleModelChange} />

                    </div>
                </div>

                <Input id="description" value={book.description} error={error?.description} onValueChange={handleModelChange} />
                <Input id="cover" value={book.cover} error={error?.cover} onValueChange={handleModelChange} />
                <button type='button' className='btn btn-primary' onClick={handleSave}>Save</button>                
                {status}
            </form>
        </div>
    );
}



export default withVisibility( withBorder(BookAddScreen));