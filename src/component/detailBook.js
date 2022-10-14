import axios from "axios";
import React ,{ useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import booksimg from '../booksimg.png';
import '../detailBook.css'


function DetailBook(){

    const [books,setBooks ]= useState([]);
    const [author,setAuthor ]= useState([]);
    const parms= useParams();
   
    const urlApi= `http://127.0.0.1:8000/api/books/${parms.id}`
    useEffect(() =>{
        axios.get(urlApi)
        .then(res =>{
            setBooks (res.data)
            setAuthor(res.data.author)
                })
        .catch(err=>{
            console.log(err)
        })
    }
    )
  
    return(
        
  <div className = "card mt-5 border-0 d-flex flex-row justify-content-center" >
    <div className="row">
      <div className="col-md-4"> <div className = "product-imgs">
      <div className = "img-display">
        <div className = "img-showcase">
          <img className="card-img-top  " src={booksimg} alt="Card image cap"  style={{ resizeMode: "center", height: 300, width: 500}}/>
        </div>
      </div>
    </div></div>
      <div className="col-md-6">
      <div className = "product-content">
      <h2 className = "product-title">{books.Title}</h2>
     

      <div className = "product-price">
        <p className = "last-price">Old Price: <span>$257.00</span></p>
        <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
      </div>

      <div className = "product-detail">
        <h2>Description: </h2>
        <p>{books.Description}</p>
      </div>

      <div className = "product-detail">
        <h2>Genre: </h2>
        <p>{books.Genre}</p>
      </div>

      <div className = "product-detail">
        <h2>Author: </h2>
        <p> {author.FirstName} {author.LastName}</p>
      </div>

     

  
    </div>
      </div>
    </div>
   
    
  </div>
// </div>
            
    )
   

}

export default DetailBook;