import React from 'react'
import netflixcover from './netflixcover copy.jpg'
import netflixlogo from './netflixlogo copy.jpg'
import tv from './img2b.png'; 
import kids from './img3.png'
import phone from './img2a.jpg'
import { useState } from 'react';
import soon from './Soon.module.css'
import { Route, Routes, Link} from 'react-router-dom'


const Soon= (props)=>{
  let [answer, setanswer] =useState(true)
  let [answer1, setanswer1] =useState(true)
  let [answer2, setanswer2] =useState(true)
  let [answer3, setanswer3] =useState(true)
  let [answer4, setanswer4] =useState(true)
  let [answer5, setanswer5] =useState(true)
 
  return (
    <div className="App">   
    <div className={soon.first}>    
    <img src={netflixcover} className={soon.cover} alt='see'/>
      </div>
      <header className="header"> 
        <img src={netflixlogo} className="logo" alt="logo" />

        <div className='signin'>
          <p className='sign'>Sign Out</p>
        </div>
        </header>
       
        <div className={soon.intro}>
            <p className='welcome'>Welcome back!</p>
          <b className='one'>Unlimited movies, TV  <br />
                shows, and more.
            </b> 

            <p className='two'>Watch anywhere and cancel anytime </p> 
            
               
         
            <div className='insert'>
              
              <div className='get'>
                <b className={soon.started}>Finish SignUp  </b>
              </div>
            </div>
            </div>

          <div className="second">
          <div className="text">
            <b className="texta">Enjoy your TV.</b>
            <p className='textb'>Watch on smart TVs, playstations, Xbox <br />
             Chromecast, Apple Tv, Blue-ray Players and more

            </p>
          </div>
          <img src={tv} className="tv" alt="logo" />
          </div>

          <div className="third">
          <img src={phone} className="phone" alt="logo" />
          <div className="texts">
          <b className="texta">Download your shows to <br />
                                <b className='texta1'>       watch Offline </b>
             </b>
          <p className='textb'>Save some of your favourites easily and always have < br />
            something to watch

            </p>
           
          </div>
          </div>

          <div className="plain-text">
          <div className="text">
            <b className={soon.texta}>Watch everywhere.</b>
            <p className={soon.textb}>Stream unlimited movies and Tv shows on <br />
            your phone tablets, laptops and Tvs

            </p>
          </div>
          </div>

          <div className="fourth">
          <img src={kids} className={soon.kids} alt="logo" />
          <div className="texts1">
            <b className={soon.textcreate}>Create kids profile.</b>
            <p className={soon.textb1}>Send kids on adventures with their favourite <br />
            character, in a space made for them with <br />
            free membership

            </p>
          </div>
         < img src={kids} className={soon.kids2} alt="logo" />
          </div>

          <div className='fifth'>
            <b className={soon.texta1}>Frequently asked questions</b>

             <div className={soon.bunch}>
            
                <p className='q'>What is Netflix?  
                <b className='plus' onClick={()=>setanswer(!answer)}>+</b> 
                

                  {
          !answer? <div className='details'>
            <p className='deta' >
                 Netflix is a streaming service that offers a wide variety of award- <br />
                  winning TV shows, movies, anime, documentaries, and more on <br />
                  thousands of internet-connected devices. <br />
                  You can watch as much as you want, whenever you want without <br/>
                  a single commercial – all for one low monthly price. There's <br />
                  always something new to discover and new TV shows and <br />
                  movies are added every week! </p> <br />

                  </div>:null
                
        }
             </p>
         

                  

              
                
                    
                 <p className='q'>How much does Netflx cost?
                <b className='plus2' onClick={()=>setanswer1(!answer1)}>+</b>
                {
          !answer1?
                <div className='details'>
                  <p className='deta'>
                  Watch anywhere, anytime. Sign in with your Netflix account to<br />
                  watch instantly on the web at netflix.com from your personal <br />
                  computer or on any internet-connected device that offers the <br />
                  Netflix app, including smart TVs, smartphones, tablets, streaming <br />
                  media players and game consoles. <br /> <br />
                  You can also download your favorite shows with the iOS, <br />
                  Android, or Windows 10 app. Use downloads to watch while <br />
                  you're on the go and without an internet connection. Take Netflix <br />
                  with you anywhere.
                  </p>
                  </div>:null
                
              }
                  </p>
              
               
                 
               

                 <p className='q'>How do i cancel??
                <b className='plus' onClick={()=>setanswer2(!answer2)}>+</b> 
                {
          !answer2?
                <div className='details'>
                  <p className='deta'>
                  Netflix is flexible. There are no pesky contracts and no <br />
                  commitments. You can easily cancel your account online in two <br />
                  clicks. There are no cancellation fees – start or stop your account  <br />
                  anytime. <br />
                  </p>
                  </div>:null
                
              }
                
                  </p>

              
               

                 <p className='q'>What can i watch on Netflix?
                <b className='plus2'onClick={()=>setanswer4(!answer4)}>+</b>
                {
          !answer4?
                <div className='details'>
                  <p className='deta'>
                  Netflix has an extensive library of feature films, documentaries, <br />
                  TV shows, anime, award-winning Netflix originals, and more. <br />
                  Watch as much as you want, anytime you want. <br />
                
                  </p>
                  </div>:null
                
              }
                 </p>

                 <p className='q'>Is Netflix for kids?
                <b className='plus'  onClick={()=>setanswer3(!answer3)}>+</b> 
                {
          !answer3?
                <div className='details'>
                  <p className='deta'>
                  The Netflix Kids experience is included in your membership to<br />
                  give parents control while kids enjoy family-friendly TV shows <br />
                  and movies in their own space.  <br />
                  Kids profiles come with PIN-protected parental controls that let <br />
                  you restrict the maturity rating of content kids can watch and <br />
                  block specific titles you don’t want kids to see. <br />
                
                  </p>
                  </div>:null
                
              }

               
                 </p>

                 <p className='q'> How do i cancel?
                <b className='plus'  onClick={()=>setanswer5(!answer5)}>+</b> 
                
                {
          !answer5?
                <div className='details'>
                  <p className='deta'>
                  Netflix is flexible. There are no pesky contracts and no <br />
                  commitments. You can easily cancel your account online in two <br />
                  clicks. There are no cancellation fees – start or stop your account  <br />
                  anytime. <br />
                
                  </p>
                  </div>:null
                
              }

               
                 </p>

                 <p className='twoc'> Ready to watch? Enter your email to create or restart your membership. </p>  <br />
               
         
            <div className='insert2'>
              <input placeholder='Email address' className='mail1'/>
              <div className='get'>
                <b className='started1'>Get started</b>
              </div>
            </div>
            
               
               
               
            
              <div>
                   
              </div>
            </div>
         </div>

         <div className='total'>
<div className='questions'>
<h3 className='contact'>Questions?, Contact us.</h3>

</div>
<div className='end'>
  <div className='end1'>
    <h3>FAQ</h3> 
    <h3>Investor Relations</h3>
    <h3>Privacy</h3>
    <h3>Speed Test</h3>
  </div>
  <div className='end2'>
  <h3>Help Center</h3>
  <h3> Jobs</h3>
  <h3> Cookies</h3>
  <h3> Preferences</h3>
  </div>
  <div className='end3'>
  <h3>Acount</h3>
  <h3>Ways to watch</h3>
  <h3> Coporate information</h3>
  <h3>Only on Netflix</h3>
  </div>
  <div className='end4'>
  <h3>Media center</h3>
  <h3>Terms of use</h3>
  <h3>Contact us</h3>
  </div>
</div>
</div>



        
       
 
    </div>
  );
}

export default Soon;
