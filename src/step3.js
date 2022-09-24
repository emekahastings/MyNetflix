import React from 'react'
import { useNavigate} from 'react-router-dom'
import whitenetflixlogo from './whitenetflixlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Questionswhite from './Questionswhite'
import steps from './steps.module.css'
const Step3= ()=>{
   
    const navigate= useNavigate()
   
    return (
          <div>
  <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo} alt='lol'/>
        <p className={steps.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
        </div>

        <div className={steps.wrap}>
        <div className={steps.lock}><FontAwesomeIcon icon={faCheckCircle} className={steps.padlock}/></div>

        <p className={steps.three}>STEP 3 OF 3</p>
        <h1 className={steps.pay}>Congratulations!!</h1>
        <div className={steps.sub} >
        <p > 
        Your Netflix signup was successful, you can start to NETFLIX & CHILL <br />
Kindly  <b  onClick={()=>navigate('/signin')}  className={steps.up}>Sign in </b> to begin
</p>
        </div>
       
       
        
       </div>
       <Questionswhite />

    </div>

    )
}

export default Step3