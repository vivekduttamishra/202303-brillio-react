
const Loader=({show,message='Please wait...', image='/images/loading.gif'})=>{
    var imageStyle={
        maxHeight:'100px'
    }

    if(show)
        return (
            <div className='loader'>
                <img src={image} style={imageStyle}/>
            </div>
        );
    else
        return null; //no ui
}

export default Loader;