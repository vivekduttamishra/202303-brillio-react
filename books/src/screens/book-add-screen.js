
const BookAddScreen=(props)=>{

    return (
        <div>
            <h2> Add New Book</h2>
            <form>
                <label className='form-label' for='id'>Id</label>
                <input className='form-control' type='text' name='id'id='id' placeholder='title'/>
                
                <label className='form-label' for='title'>Title</label>
                <input className='form-control' type='text' name='title'id='title' placeholder='title' />
                
                <label className='form-label' for='title'>Author</label>
                <input className='form-control' type='text' name='title'id='title' placeholder='author' />
                
                <button className='btn btn-primary margin5' type='submit'>Save</button>
            </form>
        </div>
    );
}

export default BookAddScreen;