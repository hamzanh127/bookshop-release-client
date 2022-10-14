import axios from "axios";
import React ,{ useEffect,useState} from "react";
import { Link } from "react-router-dom";
import booksimg from '../booksimg.png';


function ListBook(){


    const [books,setBooks ]= useState([]);
    const [serachTitle,setSearchTitle] =useState("");
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/books')
        .then(res =>{
            setBooks (res.data['hydra:member'])
           
                })
        .catch(err=>{
            console.log(err)
        })
    }
    )

    return(
        <div className="container">
            <div className="row mt-4  d-flex justify-content-center">
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" onChange={(e)=>setSearchTitle(e.target.value)} placeholder="Search ..."/>
                </div>
            </div>
            <div className="row mt-5">
                { 

                books.filter((value)=>{
                    if(serachTitle == ""){
                        return value
                    }
                    else if(value.Title.toLowerCase().includes(serachTitle?.toLocaleLowerCase())){
                        return value
                    }
                }
                ).map(book =>  
                <div className="col-lg-4 col-md-4 mt-3 mb-5 cards border-0" key={book.id}>
                    <div className="card-header d-flex justify-content-center text-center">
                         <img className="card-img-top  " src={booksimg} alt="Card image cap"  style={{ resizeMode: "center", height: 150, width: 150}}/>
                    </div>
           
                    <div className="card-bodyy">
                        <h5 className="card-title">{book.Title}</h5>
                        <p className="card-text">{book.Description}</p>
                        <Link to={`/booklist/${book.id}`}  className="btn btn-primary">Details</Link>
                    </div>
                    </div> ) 
                  
                 } 
            </div>
        </div>
    )
}

export default ListBook;


