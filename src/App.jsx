import Nav from './Pages/Nav'
import './App.css'
import Nav1 from './Pages/Nav1'
import { Routes , Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Fav from './Pages/Fav'
import Det from './Pages/Det'
import Products from './Pages/Products'
import Error from './Pages/Error'
function App() {

  return (
    <>
      <Nav1></Nav1>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Details/:id' element={<Det/>}></Route>
        <Route path='/Cart' element={<Fav/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
      </Routes>
      
      <Nav></Nav>
    </>
  )
}

export default App
