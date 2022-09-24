// import './Signin.css'
import React from 'react'
import { auth } from './Firebase.config'
import netflixcover from './netflixcover copy.jpg'
import netflixlogo from './netflixlogo copy.jpg'
import {signInWithEmailAndPassword} from 'firebase/auth'
import styles from './Signin.module.css'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'



const Signin= ()=>{    

  const navigate= useNavigate()
  let [lemail, setlemail]= useState()
  let [lpassword, setlpassword]= useState()
  let [lerror, setlerror]= useState({})
 
  let login = async()=>{
    try{
     let response= await signInWithEmailAndPassword(auth, lemail, lpassword)
     navigate('./mainpage')
     console.log(response)
    //  if(response.hasOwnProperty('message')){
    //   console.log(response.message)
    //  }
    //  if(response.hasOwnProperty('user')){
    //   console.log('sharp')
    //  }
  
    }
    catch(error){
    setlerror(
      {
      message: 'Invalid Username/Password',
    })
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
       
        <form >
       <nav>
       <img src={netflixlogo} className={styles.blogo} alt="logo" />
      <h2 className={styles.bold} >Sign in</h2> <br />
        </nav> 

           
      <p className={styles.msg}>{lerror.message}</p>
       
          
          <input className={styles.email} type='text' placeholder="Email or Phone Number" onChange={(event)=>{setlemail(event.target.value)}} /> <br /> 

          <input className={styles.password} type='password' placeholder="Password" onChange={(event)=>{setlpassword(event.target.value)}} />
        

          <div className={styles.sign}>
            <nav>
            <h3 className={styles.si} onClick={login}>Sign in</h3> 
            </nav>
          </div>
        
        </form>
          {/* <Routes>
        <Route path='./Step1' element={<Step1 />}></Route>
       </Routes> */}

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
