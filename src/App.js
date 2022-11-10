import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import ListBook from './component/ListBook';
import DetailBook from './component/detailBook';
import AddBook from './component/addbook';
import ListBookTable from './component/ListBookTable';

function App() {
  return (
    <BrowserRouter>

        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/booklist' element={<ListBook/>}/>
            <Route path='/newbook' element={<AddBook/>}/>
            <Route path='/booklist/:id' element={<DetailBook/>}/>
            <Route path='/updatebook' element={<ListBookTable/>}/>
          </Routes>
        
        </div>
    
    </BrowserRouter>
  );
}

export default App;
