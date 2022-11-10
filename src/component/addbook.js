import  axios from "axios";
import React ,{ useState} from "react";
// import {  useParams } from "react-router-dom";
// import booksimg from '../booksimg.png';
// import '../detailBook.css'


function AddBook(){

    const [books,setBooks ]= useState({
        title : "",
        description : "",
        genre : ""
    }
        
    );
    // const [author,setAuthor ]= useState([]);
    // const parms= useParams();
    const url= `http://127.0.0.1:8000/api/books`
   
    function handle(e){
        const newData={...books}
        newData[e.target.id]=e.target.value
        setBooks(newData)
        console.log(newData)

    }
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            title: books.title,
            description: books.description,
            genre: books.genre
        })
        .then(res=>{
            console.log(res.data)
        })
        // Navigate("/booklist");
    }
    return(
        
        <form onSubmit={(e)=>submit(e)}>
            <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <input type="text" onChange={(e)=> handle(e)} id="title" value={books.title} placeholder="Title" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="text" onChange={(e)=> handle(e)} id="description" value={books.description} placeholder="description" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="text" onChange={(e)=> handle(e)} id="genre" value={books.genre} placeholder="Genre" className="form-control"/>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-4">
                  <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
        </form>
     
            
    )
   

}

export default AddBook;