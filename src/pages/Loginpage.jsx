import React, { useState } from 'react'
import loginpage from '../pages/Loginpage.css'
import { useNavigate} from 'react-router-dom'
import Validationlogin from './Validationlogin'


export const Loginpage = () => {
const [values, setValues]= useState({
  name: '',
  password: '',
})

const [errors,setError] = useState({

})

function handleChange(e){
  setValues({...values,[e.target.name]:e.target.value})
}

function handleChange(e){
  e.preventDefault();
 setError(Validationlogin(values));
}

  const navigate = useNavigate();
  const submitProfile = ()=>{
    navigate('/navbar');
  }


  
  
  return (

    
    <div> 
      
      <form >
      <div className="container">  
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">UserName</label>
    <div className="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" value={values.name} name='name' onChange={handleChange}/>
      {errors.name && <p style={{color:'red', fontsize: '5px'}}>{errors.name}</p>}
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" value={values.name} name='name' onChange={handleChange}/>
      {errors.name && <p style={{color:'red', fontsize: '5px'}}>{errors.name}</p>}
    </div>
  </div>
  <div className='button'>
  <button  onClick={submitProfile} className="btn btn-primary">Sign in</button>
  </div>
  </div>
</form>

    </div>
    
  )
}
export default Loginpage
