import React from 'react'
import styles from './Signin.module.css'
import steps from './steps.module.css'
import { auth } from './Firebase.config'
import Step2a from './Step2a'
import { Route, Routes, Link, Outlet, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

import whitenetflixlogo from './sharpnetflixlogo.png'
import Questionswhite from './Questionswhite'

const Step1b= ()=>{
const navigate= useNavigate()

  let [remail, setremail]= useState()
  let [rpassword, setrpassword]= useState()
  let [error, seterror]= useState(false)


 
  let register = async()=>{
   
     try{
      let user= await createUserWithEmailAndPassword(auth, remail, rpassword)
      navigate('./Step2a')
      console.log(user)
     }
    
     catch(error){
     
      seterror(
        {
        message: 'Please check Email/Password',
      })
     }
  }

    return (
    <div>
        <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo}  alt="lol"/>
        <p className={steps.firstp} onClick={()=>navigate('/signin')}>Sign In</p>
        </div>
        <div className={steps.second}>
        <div>
   
   <div className={steps.devices}>
 
   </div>
   <p className={steps.secondp}>Step <b>1</b> out of 3</p>
    </div>
    <p className={steps.msg}>{error.message}</p>
    <h1 className={steps.finish}>Create a password to <br /> start your membership</h1>

    <div className={steps.paper}>
        <p> Just a few more steps and you are done!, <br className={steps.noshow}/>
        We hate to do paperwork too</p>
    </div>
    
    <input className={steps.email} type='email'  placeholder="Email or Phone Number" required onChange={(event)=>{
      setremail(event.target.value) }} /> <br /> 


<input className={steps.password} type='password' placeholder="Password"  onChange={(event)=>{
      setrpassword(event.target.value)}}/>

<p className={steps.offers}> <input type={'checkbox'}  className={steps.boxes} /> Please remind me of new offers</p>


<div className={steps.sign}>
  <nav>
  <h3 className={steps.si3} onClick={register}>Next</h3> 
  </nav>
  <Outlet />
</div>
<Routes>
<Route path='/step2a' element={<Step2a />}></Route>
</Routes>

    
      </div>
      <Questionswhite />
          
    </div>
    

    )
}
export default Step1b