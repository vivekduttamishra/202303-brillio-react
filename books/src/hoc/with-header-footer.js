import NavigationBar from "../components/navigation-bar.components"
import Footer from '../components/footer.components';


const withHeaderAndFooter=(OriginalComponent,title)=>{

    return props=>{

        return (
            <div>
                <NavigationBar title={title} />
                <OriginalComponent {...props} />
                <Footer/>
            </div>
        );
    }

}

export default withHeaderAndFooter;