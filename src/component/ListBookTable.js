import axios from "axios";
import React ,{ useEffect,useState} from "react";
import { Link } from "react-router-dom";
import EditBook from "./editBook";


function ListBookTable(){


    const [books,setBooks ]= useState([]);
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[genre,setGenre]=useState("");
    const [serachTitle,setSearchTitle] =useState("");
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/books')
        .then(res =>{
            setBooks (res.data['hydra:member'])
            setTitle(res.data['hydra:member'][0].title)
            setDescription(res.data['hydra:member'][0].description)
            setGenre(res.data['hydra:member'][0].genre)
                })
        .catch(err=>{
            console.log(err)
        })
    },[]
    )

    function deleteBook(id){
        axios.delete(`http://127.0.0.1:8000/api/books/${id}`)
        .then(res=>{
            console.log('Deleted succesfully !!')
        })
    }

    function selectUser(id){
      let item=books[id-1]
      setTitle(item.title)
      setDescription(item.description)
      setGenre(item.genre)
      console.log(item)
    }

    const [showResults, setShowResults] = React.useState(false)
    const showUpdate = () => setShowResults(true)

    return(
      
        <div className="container">
            <div className="row mt-4  d-flex justify-content-center">
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" onChange={(e)=>setSearchTitle(e.target.value)} placeholder="Search ..."/>
                </div>
            </div>
            <div className="row mt-5">
            {/* { showResults ? <EditBook /> : null } */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Genre</th>
                    <th scope="col">update</th>
                    <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                { 

                books.filter((value)=>{
                    if(serachTitle === ""){
                        return value
                    }
                    else if(value.title.toLowerCase().includes(serachTitle?.toLocaleLowerCase())){
                        return value
                    }
                }
                )
                
                .map(book =>  
              
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.genre}</td>
                        <td ><Link onClick={()=>selectUser(book.id)} className="btn btn-primary">update</Link></td>
                        <td ><Link onClick={()=>deleteBook(book.id)} className="btn btn-danger">delete</Link></td>
                    </tr>
                         
                     
                    
                    ) 
                  
                 } 
                   </tbody>
                        </table>
            </div>
            <div className="row mt-5">
            
                <div className="col-md-4">
                    <input type="text" id="title" onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder="Title" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="text" id="description" onChange={(e)=>{setDescription(e.target.value)}} value={description} placeholder="description" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="text" id="genre" onChange={(e)=>{setGenre(e.target.value)}} value={genre} placeholder="Genre" className="form-control"/>
                </div>
          
            <div className="row d-flex justify-content-center mt-4 mb-4">
                <div className="col-md-4">
                  <button className="btn btn-primary" >Update</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ListBookTable;


