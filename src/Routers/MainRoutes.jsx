import { Route,Routes } from "react-router-dom"
import Login from "../pages/Auth/Login"
import Signup from "../pages/Auth/Signup"
import Home from "../pages/Home"

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
   </Routes>
  )
}

export default MainRoutes;