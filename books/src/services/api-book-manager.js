import { delay } from "./delay";
import axios from 'axios';

const url= 'http://localhost:4000/books';

export class ApiBookManager {
   

    async getAllBooks(){
        var response = await axios.get(url);
        console.log('response.data',response.data);
        
        return response.data;
    }

    async getBookById(id){
        try{

            var response= await axios.get(  `${url}/${id}`);
            console.log('response.data',response.data);
            
            return response.data;
        }
        catch(error){
            return undefined
        }
    }

    async addBook(book){
        try{
            var response = await axios.post(url, book);
            return response.data;
        }
        catch(error){
            throw error;
        }
        
    }
}

var bookManager=new ApiBookManager();

export default bookManager;