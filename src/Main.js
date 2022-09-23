import React,{useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, route, link } from "react-router"
import main from './main.module.css'
import {useNavigate} from 'react-router-dom'
import netflixlogo from './netflixlogo copy.jpg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Main = ()=>{
    const navigate= useNavigate()
    const [home, setHome]= useState([])
    const [trendingtv, settrendingtv]= useState([])
    const [trendingmv, settrendingmv]= useState([])
    const [rectv, setrectv]= useState([])
    const [recmv, setrecmv]= useState([])
    const[discover, setdiscover]= useState([])
    const [show, setshow]= useState()
  
  

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/559?api_key=384a26b16e56aa6177f73139defe1b77')
    .then(response =>{
      setHome(response.data)

      console.log(response.data)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=384a26b16e56aa6177f73139defe1b77')
  .then(response =>{
    settrendingmv(response.data.results)

    console.log(response.data.results)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=384a26b16e56aa6177f73139defe1b77')
  .then(response =>{
    settrendingtv(response.data.results)
    console.log(response.data.results)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/tv/1400/recommendations?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    setrectv(response.data.results)
    console.log(response.data.results)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/400/recommendations?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    setrecmv(response.data.results)
    console.log(response.data.results)    })
}, [])





 return(
   

 <div className={main.app}>
 
<div className={main.navbar}>    
<FontAwesomeIcon icon={faBars}  className={main.ham}  onClick={()=>setshow(!show)}/>
{
          show? <div className={main.sidebar}>
            <p>My Account</p>
            <p>Home</p>
         <p onClick={()=>navigate('/movies')}>Movies</p>
         <p  onClick={()=>navigate('/tvshows')}>Tv shows</p>
         <p onClick={()=>navigate('/discover')}>Discover</p>
         <p onClick={()=>navigate('/search')}> Search</p>
         <p>Rate us</p>
       
       </div>:null
        }

    <img src={netflixlogo} className={main.logo} alt="non"  />
    <p className={main.points}> Home</p>
    <p className={main.points} onClick={()=>navigate('./movies')}>Movies</p>
    <p className={main.points} onClick={()=>navigate('/tvshows')}>Tv shows</p>
    <p className={main.points} onClick={()=>navigate('/discover')}>Discover</p>
    <p className={main.points}>Trending</p>

<input type={"search"} className={main.search} placeholder={'Search...'} />
<FontAwesomeIcon icon={faMagnifyingGlass}  className={main.look} onClick={()=>navigate('/search')} />
<p className={main.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
</div>
{
      <div>
        <img src={'https://image.tmdb.org/t/p/w500/6MQmtWk4cFwSDyNvIgoJRBIHUT3.jpg'} className={main.cover}/>
        <div  className={main.coverdetails}>
        {/* <h1 className={main.covertitle}> {home.title}</h1>
        <p className={main.coveroverview}>{home.overview}</p>
        <h1 className={main.coverruntime}>{home.runtime} mins</h1> */}
         </div>

         
         <div className={main.desc}><h2> Trending movies</h2></div> 
      <div className={main.upcoming} > 
        {trendingmv && trendingmv.map((all)=>(
          <div key={all.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${all.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

      <div className={main.desc}><h2>Trending Tvshows</h2></div> 
      <div className={main.upcoming} > 
        {trendingtv&& trendingtv.map((wow)=>(
          <div key={wow.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${wow.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

      <div className={main.desc}><h2> Tvshows you may like</h2></div> 
      <div className={main.upcoming} > 
        {rectv&& rectv.map((oya)=>(
          <div key={oya.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${oya.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

      <div className={main.desc}><h2>You may also like</h2></div> 
      <div className={main.upcoming} > 
        {recmv&& recmv.map((leggo)=>(
          <div key={leggo.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${leggo.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

    
    
   


      <div>

        </div>
      </div>

      
  }
  
</div>
 )
 }


export default Main