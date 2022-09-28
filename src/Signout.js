import React from "react";
// import { auth } from "./Firebase.config";
// import { signOut } from "firebase/auth";
import steps from './steps.module.css'
import whitenetflixlogo from './whitenetflixlogo.png'
import {  useNavigate } from "react-router-dom";
import Questionswhite from "./Questionswhite";


const Signout= ()=>{

    const navigate= useNavigate()

    // const logout= async()=>{
    //     await signOut(auth)

    // }
return(
    <div>
 <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo} alt="lol" />
        <nav className={steps.signincover}> 
                   <p className={steps.signin} onClick={()=>navigate('signin')}>Sign In</p>  
                   </nav>
        </div>

     <div  className={steps.confirm}>
        <h2 className={steps.leave}>Leaving so Soon?</h2> 

        <p  className={steps.just}>Just so you know, you dont always need to sign out of nertflix.
        Its only necessary if you are on a shared or public computer <br /> <br />
        You will be directed to the home page if you still want to sign out
        </p>
        <div className={steps.gonow}>
            <div className={steps.go}  onClick={()=>navigate('/')}>Go now</div> 
        </div>
     </div>

     <div>
            <Questionswhite />
        </div>
  


    </div>
)
}

export default Signout