import React from 'react'
import main from './main.module.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import netflixlogo from './netflixlogo copy.jpg'
import axios from 'axios'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Discover = ()=>{
    const navigate= useNavigate()
    const [show, setshow]= useState()
    const [home, sethome]= useState([])
    const [discmovie, setdiscmovie]= useState([])
    const [disctv, setdisctv]= useState([])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/414?api_key=384a26b16e56aa6177f73139defe1b77')
        .then(response =>{
          sethome(response.data)
    
          console.log(response.data)    })
    }, [])

    useEffect(()=>{  
        
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
        .then(response =>{
           setdiscmovie(response.data.results)
      
          console.log(response.data.results)    })
      }, [])

      useEffect(()=>{  
        
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
        .then(response =>{
           setdisctv(response.data.results)
      
          console.log(response.data.results)    })
      }, [])
   

    return(
        <div>
            <div className={main.app}>
<div className={main.navbar}>    
<FontAwesomeIcon icon={faBars}  className={main.ham}  onClick={()=>setshow(!show)}/>
{
          show? <div className={main.sidebar}>
            <p>My Account</p>
            <p>Home</p>
         <p>Movies</p>
         <p onClick={()=>navigate('/tvshows')}>Tv shows</p>
         <p>Discover</p>
         <p> Trending</p>
         <p>Rate us</p>
       
       </div>:null
        }

    <img src={netflixlogo} className={main.logo} alt="non"  />
    <p className={main.points} onClick={()=>navigate('/mainpage')}> Home</p>
    <p className={main.points} onClick={()=>navigate('/tvshows')}>Movies</p>
    <p className={main.points} onClick={()=>navigate('/discover')}>Tv shows</p>
    <p className={main.points} >Discover</p>
    <p className={main.points}>Trending</p>

<input type={"search"} className={main.search} placeholder={'Search...'} />
<p className={main.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
</div>
</div>
        
{     
       <div className={main.rest}>
        <div>
          <img src={'https://image.tmdb.org/t/p/w500/'+`${home.backdrop_path}`} className={main.cover}/>
          <div  className={main.coverdetails}>
          {/* <h1 className={main.covertitle}> {home.title}</h1> */}
          </div>


        
      <div className={main.desc}><h2> Discover Movies</h2></div> 
      <div className={main.upcomingd} > 
        {discmovie && discmovie.map((find)=>(
          <div key={find.id} className={main.upcominglistd}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${find.backdrop_path}`} className={main.upcomingdisc} />
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
     
      <div className={main.desc}><h2> Discover Tv shows</h2></div>
      <div className={main.upcomingd} > 
        {disctv && disctv.map((look)=>(
          <div key={look.id} className={main.upcominglistd}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${look.backdrop_path}`} className={main.upcomingdisc}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
           </div>
           </div>
           }
      
  
    
       

        </div>
    )
}
export default Discover

