import { Route, RouterProvider, createBrowserRouter,createRoutesFromChildren,createRoutesFromElements } from 'react-router-dom'
import {Navbar,Footer,Hero,LogoCloud,BlogSection,GetInTouch,Testimonial,FAQ,Contact,About,Home,SigninForm,LoginForm,Dashboard} from './components/index'
import Layout from './Layout'
import Causes from './components/Causes/Causes'
import SignUp from './components/Signup.jsx'
import { Protected } from './components/AuthLayout.jsx'


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path="/Causes" element={<Causes/>}/>
      <Route path="/Login" element={<LoginForm/>}/>
      <Route path="/SignUp" element={
        <Protected authentication={false}>
      <SignUp/>
      </Protected>
      }/>
      <Route path="/Dashboard" element={
      <Protected authentication>
      <Dashboard/>
      </Protected>
      }/>

    </Route>
  )
)
function App() {


  return (
<RouterProvider router={router}/>
)
}

export default App
