import If from "../components/if.component"


const withVisibility = (OriginalComponent, defaultVisibility = true) => {
    
    return props => {
        var visibility=defaultVisibility;
        if(props.visible!==undefined) 
            visibility=props.visible;

        return (

            <If condition={visibility}>
                <OriginalComponent {...props} />
            </If>

        );
    }

}

export default withVisibility;