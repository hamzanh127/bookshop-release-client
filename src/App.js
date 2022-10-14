import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import ListBook from './component/ListBook';
import DetailBook from './component/detailBook';

function App() {
  return (
    <BrowserRouter>

        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/booklist' element={<ListBook/>}/>
            <Route path='/booklist/:id' element={<DetailBook/>}/>
          </Routes>
        
        </div>
    
    </BrowserRouter>
  );
}

export default App;
