import './App.css';
import "./style/index.css"
import "./style/register.css"

import Register from './Auth/Register';
import HomePage from "./HomePage"
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Login from './Auth/Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage/> } />
      <Route path='/register' element={ <Register/> } />
      <Route path='/login' element={ <Login/> } />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
