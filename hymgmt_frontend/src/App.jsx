import Header_components from './components/Header_components'
import Footer_components from './components/Footer_components'
import Home from './pages/Home'
import About from'./pages/About'
import Contact from './pages/Contact'
import Login_page from './pages/Login_page'
import Register from './pages/Register'
import { Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <div>
      <Header_components></Header_components>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login_page/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer_components></Footer_components>
   </div>
  )
}
export default App
