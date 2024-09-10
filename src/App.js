import  './App.css'
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes , Link} from 'react-router-dom'
import { Shopcategory } from './pages/Shopcategory';
import { Loginpage } from './pages/Loginpage';
import { Shop } from './pages/Shop';
import Women from './components/category/Women';
import Jewellery from './components/category/Jewellery';
import Electronics from './components/category/Electronics';
import Profile from './components/profile/Profile';


function App (){
  return(
  <div>
<BrowserRouter>
{/* <NavBar/> */}
<Routes>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/navbar' element={<NavBar/>}/>
  <Route path='/shopcategory' element={<Shopcategory category="mens"/>}/>
  {/* <Route path='/shopcategory' element={<Shopcategory category="womens"/>}/> */}
  <Route path='/shopcategorywomen' element={<Shopcategory category="womens" />}/>
  <Route path='/shopcategoryjewellery' element={<Shopcategory category="jewellery"/>}/>
  <Route path='/shopcategoryelectronics' element={<Shopcategory category="electronics"/>}/>
  

   
    
    <Route path='/Profile' element={<Shopcategory category="profile"/>} />

    
    <Route path='/' element={<Loginpage/>}/>
    

   


</Routes>
</BrowserRouter>  
  </div>
 
 );

}
export default App;