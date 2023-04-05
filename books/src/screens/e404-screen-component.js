import withHeaderAndFooter from "../hoc/with-header-footer";


export const E404Component=(props)=>{

    var imageStyle={
        width:'250px'
    }

    return (
       
            <div>
                <h2>Not Found!!!</h2>
                <h4 className='text-danger'>{props.message}</h4>
                <p>Sorry We couldn't find what you are looking for</p>
                <img style={imageStyle} src='/images/e404.png' alt='Not Found' />

                <p>We have taken a note of your request and looking into it</p>
            </div>
            
    );
}

export default withHeaderAndFooter(E404Component,'World Wide Books');