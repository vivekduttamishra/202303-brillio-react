import {Component} from 'react';



export class HomeScreen extends Component {

    constructor(props){
        super(props);
        console.log('props',props);
        
    }

    render() {
        return <div>            
            <h2>Our Recommended Books</h2>
            <p>Here you will get recommendations 
                for {this.props.books.length} of
                our most loved books</p>
            
        </div>;
    }
}