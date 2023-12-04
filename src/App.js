import './App.css';
import Home from './components/Home';
import DetailPage from './components/DetailPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<DetailPage/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
