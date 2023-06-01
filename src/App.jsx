import './App.scss'
import NavBar from './components/navigation/NavBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  

  return (
   <Router>
    <NavBar/>
     <Routes>
      <Route path="/" index element={<Home/>}/>
    </Routes> 
   </Router>
  )
}

export default App
