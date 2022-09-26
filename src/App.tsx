import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home/Home';
import { NotFound } from './Share/NotFound/NotFound';

function App() {
 

  return (
    <div className="App">
      
      
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  )
}

export default App
