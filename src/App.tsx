import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home/Home';
import { NotFound } from './Share/NotFound/NotFound';
import { LoginModal } from './Components/LoginModal/LoginModal';
import { SingleProductPage } from './Pages/SingleProductPage/SingleProductPage';
import { SingleProductDetail } from './Pages/SingleProductDetail/SingleProductDetail';

function App() {
 

  return (
    <div className="App">
      
      
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/:productName/:_id" element={<SingleProductPage />}/>
          <Route path="/:id" element={<SingleProductDetail />}/>
          <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  )
}

export default App
