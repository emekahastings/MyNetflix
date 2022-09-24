import React from 'react'
import steps from './steps.module.css'
import devices from"./devices.jpg"
import { Route, Routes, Link, useNavigate} from 'react-router-dom'
import Step1b from './Step1b'
import whitenetflixlogo from './sharpnetflixlogo.png'
import Questionswhite from './Questionswhite'
const Step1a= ()=>{

   const navigate= useNavigate()
    return (
    <div>
        <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo} alt="lol" />
        <p className={steps.firstp} onClick={()=>navigate('/signin')}>Sign In</p>
        </div>
        <div className={steps.second}>
        <div>
   <img src={devices} className={steps.gadgets}  alt="lol"/>
   <p className={steps.secondp}>Step <b>1</b> out of 3</p>
    </div>
    <h1 className={steps.finisha}>Finish Settting up your <br /> account</h1>
    <div className={steps.personal}>
   <p>Netflix is personalized for you. <br  className={steps.noshow}/>
   Create a password to watch on any device  < br lassName={steps.noshow}/>
    at anytime
 </p>
    </div>
    <div className={steps.sign}>
       <Link to='/step1b' >  <h3 className={steps.si2}>Next</h3> </Link>
     
          </div>
         

          <Routes>
        <Route path='step1b' element={<Step1b />}></Route>
       </Routes>
      </div>
      
      <Questionswhite />
          
    </div>
    

    )
}
export default Step1a