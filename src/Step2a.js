import React from 'react'
import steps from './steps.module.css'
import check from './check.png'
import whitenetflixlogo from './whitenetflixlogo.png'
import good from './good.webp'
import Questionswhite from './Questionswhite'
import Step2b  from './Step2b'
import { Route, Routes, Link, useNavigate} from 'react-router-dom'

const Step2a= ()=>{

  const navigate= useNavigate()


    return (
    <div>
        <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo} />
        <p className={steps.firstp} onClick={()=>navigate('/signin')}>Sign In</p>
        </div>
        <div className={steps.second}>
        <div>
   <img src={good} className={steps.circle} /> <br />
   <h1> Choose your plan</h1>
   <p className={steps.secondp}>Step <b>1</b> out of 3</p>
    </div>
    <div className={steps.commit}>
   <div className={steps.a}> <img src={check} className={steps.checks} /> <div className={steps.thirdp}>No commitments, Cancel anytime</div></div> < br />
    <div className={steps.a}><img src={check} className={steps.checks} /> <div className={steps.thirdp}>Everything on netflix for one low price</div></div>  < br />
     <div className={steps.a}><img src={check} className={steps.checks} /> <div className={steps.thirdp}>No ads, no extra fees, Ever!</div></div>  < br />
    </div>
    <div className={steps.sign}>
            <Link to="/step2b"> <h3 className={steps.si3}>Next</h3></Link>
          </div>
      </div>
     <Routes>
      <Route  path='Step2' element={<Step2b />}></Route>
     </Routes>
      
      <Questionswhite />
          
    </div>
    

    )
}
export default Step2a