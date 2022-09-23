import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes, Link, Outlet, useNavigate} from 'react-router-dom'
import steps from './steps.module.css'
import check from './check.png'
import whitenetflixlogo from './whitenetflixlogo.png'
import Questionswhite  from './Questionswhite'
import Step3 from './step3'
import { auth } from "./Firebase.config";
import { signOut } from "firebase/auth";

import { useState } from 'react'

   
  

const Step2b= ()=>{

  const navigate= useNavigate()

  const logout= async()=>{
    await signOut(auth)

}

    function mobileChange(event){
      if (event.target.classList.contains ("steps_mobile__3US8B")){
           alert('yes')
         
           
    } else{
        alert('No')
    }
}



    return (
    <div>
  <div className={steps.first}>
        <img src={whitenetflixlogo} className={steps.logo} />
        <p className={steps.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
        </div>
        <div className={steps.width}>
        <div className={steps.choose}>
        <p className={steps.secondp}>Step <b>1</b> out of 3</p>
        <h1 className={steps.size}>Choose the plan that's <br className={steps.oyashow} /> right for you</h1>
        </div>

        <div classname={steps.bullets}>
     
        <div className={steps.a2}> <img src={check} className={steps.checks2} /> <div classname={steps.thirdp}>  Watch all you want, ad free.</div> </div> < br />
    <div className={steps.a2}><img src={check} className={steps.checks2} /> <div classname={steps.thirdp}>Recommendations just for you</div> </div> < br />
     <div className={steps.a2}><img src={check} className={steps.checks2} /> <div classname={steps.thirdp}>Change or cancel your plan anytime.</div></div>  < br />
        </div>

        
        <div className={steps.contain}>
            <div className={steps.boxline}>
            <div className={steps.mobile} onClick={ mobileChange} >Mobile</div>
            <div className={steps.tranglem}></div>
            <div className={steps.basic}>Basic</div>
            <div className={steps.trangleb}></div>
            <div className={steps.standard}>Standard</div>
            <div className={steps.trangles}></div>
            <div className={steps.premium}>Premium</div>
            <div className={steps.tranglep}></div> 
       
            </div>  <br /> <br /> < br /> <br /> <br /><br /> <br />
            <div className={steps.groups}>
                <div className={steps.mp}>Monthly Price</div>
                <div className={steps.group1}>
                <div className={steps.g1a }>#1200</div>
                <div className={steps.g1b}>#2400</div>
                <div className={steps.g1c}>#3600</div>
           </div>
                <div>
                <div className={steps.vq}>Video Quality</div>
                <div className={steps.group2}>
                <div className={steps.g2a }>Good</div>
                <div className={steps.g2b}>Better</div>
                <div className={steps.g2c}>Best</div>
               
                </div>
                <div>
                <div className={steps.res}>Resolution</div>
                <div className={steps.group3}>
                <div className={steps.g3a }>480P</div>
                <div className={steps.g3b}>480P</div>
                <div className={steps.g3c}>1080P</div>
                </div>

                <div>
                <div className={steps.dev}>Devices you can use to watch</div>
                <div className={steps.group4}>
                <div className={steps.g4a }> <FontAwesomeIcon icon={faMobileButton}  className={steps.g4a}/> </div>
                <div className={steps.g4b}><FontAwesomeIcon icon={faMobileButton}  className={steps.g4b}/></div>
                <div className={steps.g4c}><FontAwesomeIcon icon={faMobileButton}  className={steps.g4c}/></div>
               </div>
               
               

              <div className={steps.group5}>
                <div className={steps.row5a }> <FontAwesomeIcon icon={faTabletAlt}  className={steps.g5a}/> </div>
                <div className={steps.row5b}><FontAwesomeIcon icon={faTabletAlt}  className={steps.g5b}/></div>
                <div className={steps.row5c}><FontAwesomeIcon icon={faTabletAlt}  className={steps.g5c}/></div>
               </div>
                
                <div className={steps.group6}>
                <div className={steps.row6c}><FontAwesomeIcon icon={faComputer}  className={steps.g6c}/></div>
                <div className={steps.row6d}><FontAwesomeIcon icon={faComputer}  className={steps.g6d}/></div>
                  </div>
                
                
               
                <div className={steps.group7}>
                <div className={steps.row7b}><FontAwesomeIcon icon={faTv}  className={steps.g7b}/></div>

                </div> 

                </div>
                </div>
                </div>
                </div>
            <div className={steps.rows}>
                <div className={steps.pricemove}>
                <div className={steps.rowhead1}>Monthly Price</div> <br  className={steps.pricemove}/>
                 </div>
                <div className={steps.row1a }>#1200</div>
                <div className={steps.row1b}>#2400</div>
                <div className={steps.row1c}>#3600</div>
                <div className={steps.row1d}> #4500</div>
                </div>
               
                <div className={steps.rows}>
                <div className={steps.rowhead1}>Video quality</div>
                <div className={steps.row2a }>Good</div>
                <div className={steps.row2b}>Good</div>
                <div className={steps.row2c}>Better</div>
                <div className={steps.row2d}> Best</div>
                </div>
 
                <div className={steps.rows}>
                <div className={steps.rowhead1}>Resolution</div>
                <div className={steps.row3a }>480p</div>
                <div className={steps.row3b}>480p</div>
                <div className={steps.row3c}>1080P</div>
                <div className={steps.row3d}> 4K/HDR</div>
                </div>
                <div className={steps.devicess}>
                <div className={steps.rowhead1}>Devices you can use to watch</div>
                <div className={steps.row4a }> <FontAwesomeIcon icon={faMobileButton}  className={steps.phone}/> </div>
                <div className={steps.row4b}><FontAwesomeIcon icon={faMobileButton}  className={steps.phone}/></div>
                <div className={steps.row4c}><FontAwesomeIcon icon={faMobileButton}  className={steps.phone}/></div>
                <div className={steps.row4d}><FontAwesomeIcon icon={faMobileButton}  className={steps.phone}/></div>
               
                </div>

                <div className={steps.devicess}>
                <div className={steps.row5a }> <FontAwesomeIcon icon={faTabletAlt}  className={steps.phone}/> </div>
                <div className={steps.row5b}><FontAwesomeIcon icon={faTabletAlt}  className={steps.phone}/></div>
                <div className={steps.row5c}><FontAwesomeIcon icon={faTabletAlt}  className={steps.phone}/></div>
                <div className={steps.row5d}><FontAwesomeIcon icon={faTabletAlt}  className={steps.phone}/></div>
                </div>
                <div className={steps.devicess}>
                <div className={steps.row6b}><FontAwesomeIcon icon={faComputer}  className={steps.phone}/></div>
                <div className={steps.row6c}><FontAwesomeIcon icon={faComputer}  className={steps.phone}/></div>
                <div className={steps.row6d}><FontAwesomeIcon icon={faComputer}  className={steps.phone}/></div>
                </div>
                <div className={steps.devicess}>
                <div className={steps.row7b}><FontAwesomeIcon icon={faTv}  className={steps.phone}/></div>
                <div className={steps.row7c}><FontAwesomeIcon icon={faTv}  className={steps.phone}/></div>
                <div className={steps.row7d}><FontAwesomeIcon icon={faTv}  className={steps.phone}/></div>
                </div>

                <div className={steps.last}>
                <p className={steps.last1}>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content   <br />
                is available in all resolutions. See our Terms of Use for more details. </p>

                <p className={steps.last2}>
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, <br />
                and 1 with Basic and Mobile.
                </p>
                </div>

                <div className={steps.nextdiv}>
                    <Link to="/step3"><div className={steps.next}>Next</div></Link>
                    <Outlet />
                </div>
                <Routes>
<Route path='/step3' element={<Step3 />}></Route>
</Routes>

               

            
               
              

               

           
          
           
            </div>
          
          
            
                
            
          
          
          </div>
         
          <Questionswhite />
           
        </div>


   

    )
}

export default Step2b;