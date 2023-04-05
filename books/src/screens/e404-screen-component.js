import Footer from "../components/footer.components";
import NavigationBar from "../components/navigation-bar.components";

const E404Screen=(props)=>{

    var imageStyle={
        width:'250px'
    }

    return (
        <div>
            <NavigationBar/>
            <div>
                <h2>Not Found!!!</h2>
                <p>Sorry We couldn't find what you are looking for</p>
                <img style={imageStyle} src='/images/e404.png' alt='Not Found' />

                <p>We have taken a note of your request and looking into it</p>
            </div>
            <Footer/>

        </div>
    );
}

export default E404Screen;