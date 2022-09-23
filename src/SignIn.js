// import './Signin.css'
import React, { useEffect } from 'react'
import { auth } from './Firebase.config'
import Step1 from './Step1a'
import netflixcover from './netflixcover copy.jpg'
import netflixlogo from './netflixlogo copy.jpg'
import {signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth'
import styles from './Signin.module.css'
import { useState } from 'react'
import { Route, Routes, Link, useNavigate} from 'react-router-dom'



const Signin= ()=>{    

  const navigate= useNavigate()
  let [user, setuser]= useState()
  let [lemail, setlemail]= useState()
  let [lpassword, setlpassword]= useState()

  let login = async()=>{
    try{
     let user= await signInWithEmailAndPassword(auth, lemail, lpassword)
     navigate('./mainpage')
     console.log(user)
    }
   
    catch(error){
     alert('Incorrect username or password')
    }
    
 }

    return (        
      <div>

         <div className="first">    
    <img src={netflixcover} className={styles.cover} alt='see'/>

      <header className={styles.header}> 
        <img src={netflixlogo} className={styles.logo} alt="logo" />
        <img src={netflixlogo} className={styles.blogo} alt="logo" />
        </header>
        <div className={styles.box}>
        <img src={netflixlogo} className={styles.blogo} alt="logo" />
       
       <nav>
       <img src={netflixlogo} className={styles.blogo} alt="logo" />
      <h2 className={styles.bold} >Sign in</h2> <br /> 
        </nav>

         
          <input className={styles.email} type='text' placeholder="Email or Phone Number" onChange={(event)=>{setlemail(event.target.value)}} /> <br /> 

          <input className={styles.password} type='password' placeholder="Password" onChange={(event)=>{setlpassword(event.target.value)}} />


          <div className={styles.sign}>
            <nav>
            <Link to="./step1"><h3 className={styles.si} onClick={login}>Sign in</h3> </Link>
            </nav>
          </div>

          <Routes>
        <Route path='./Step1' element={<Step1 />}></Route>
       </Routes>

          <div className={styles.check}>
           <p className={styles.me}> <input type={'checkbox'}   /> Remember me</p>
            <p className={styles.help}>Need Help?</p>
          </div> <br />

          <div className={styles.next}>
            <nav className={styles.new} >
           <p > New to Netflix?,  <b  onClick={()=>navigate('step1b')}  className={styles.up}>SIGN UP</b> now</p>
           </nav>

            <p className={styles.captcha} >This page is protected by google recaptcha <br />
             to ensure yoyu are not a bot</p>
           </div>
          


          <div  className={styles.last}>
<div className={styles.final}>
<div className={styles.questions}>
<p className={styles.contact}>Questions?, Contact us.</p>
</div>
        <div className={styles.end}>
  <div className={styles.end1}>
    <p>FAQ</p> 
    <p>Cookie Preference</p>
  </div>
  <div className={styles.end2}>
  <p>Help Center</p>
  <p> Coporate Information</p>
  </div>
  <div className={styles.end3}>
  <p>Terms of use</p>

  </div>
  <div className={styles.end4}>
  <p>Privacy</p>
  </div>
          </div>
</div>
</div>
   
</div>
</div>


    
</div>


        
     
    
    )
}
export default Signin
