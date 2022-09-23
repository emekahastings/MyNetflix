import React,{useEffect, useState} from 'react'
import main from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import netflixlogo from './netflixlogo copy.jpg'
import axios from 'axios'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Movies= ()=>{
    const navigate= useNavigate()
    const[upcoming, setupcoming]= useState([])
    const[toprated, settoprated]= useState([])
    const[popular, setpopular]= useState([])
    const[home, setHome]= useState([])
    const[similar, setsimilar]= useState([])
    const [show, setshow]= useState()
    const [search, setsearch]= useState()

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/400?api_key=384a26b16e56aa6177f73139defe1b77')
    .then(response =>{
      setHome(response.data)

      console.log(response.data)    })
}, [])

useEffect(()=>{  
  axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    setupcoming(response.data.results)

    console.log(response.data.results)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    setpopular(response.data.results)

    console.log(response.data.results)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    settoprated(response.data.results)

    console.log(response.data.results)    })
}, [])

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/600/similar?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
    .then(response =>{
      setsimilar(response.data.results)
  
      console.log(response.data.results)    })
  }, [])

 function find(){ 
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1&include_adult=false')
        .then(response =>{
          setsearch(response.data)
      
          console.log(response.data)    })
      
 }
    return(

        <div className={main.app}>
<div className={main.navbar}>    
<FontAwesomeIcon icon={faBars}  className={main.ham}  onClick={()=>setshow(!show)}/>
{
          show? <div className={main.sidebar}>
            <p>My Account</p>
            <p onClick={()=>navigate('/mainpage')}>Home</p>
         <p>Movies</p>
         <p onClick={()=>navigate('/tvshows')}>Tv shows</p>
         <p>Discover</p>
         <p onClick={()=>navigate('/search')}> Search</p>
         <p>Rate us</p>
       
       </div>:null
        }

    <img src={netflixlogo} className={main.logo} alt="non"  />
    <p className={main.points}  onClick={()=>navigate('/mainpage')}> Home</p>
    <p className={main.points}>Movies</p>
    <p className={main.points} onClick={()=>navigate('/tvshows')}>Tv shows</p>
    <p className={main.points} onClick={()=>navigate('/discover')}>Discover</p>
    <p className={main.points}>Trending</p>

<input type={"search"} className={main.search} placeholder={'Search...'} onChange={find} /> 
<p className={main.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
</div>

    {
        <div>
          <img src={'https://image.tmdb.org/t/p/w500/'+`${home.backdrop_path}`} className={main.cover}/>
          <div  className={main.coverdetails}>
          {/* <h1 className={main.covertitle}> {home.title}</h1> */}
          </div>

          <div className={main.desc}><h2>  Movie Recommendations</h2></div>
          <div className={main.upcoming} > 
        {similar && similar.map((resemble)=>(
          <div key={resemble.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${resemble.backdrop_path}`} className={main.upcoming1} />
          
        </div>
        ))}
      </div>
        
      <div className={main.desc}><h2> Popular Movies</h2></div> 
      <div className={main.upcoming} > 
        {popular && popular.map((spread)=>(
          <div key={spread.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${spread.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
      <div className={main.desc}><h2> Top-rated Movies</h2></div>
      <div className={main.upcoming} > 
        {toprated && toprated.map((notch)=>(
          <div key={notch.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${notch.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
      <div className={main.desc}><h2> Upcoming Movies</h2></div>
      <div className={main.upcoming} > 
        {upcoming && upcoming.map((soon)=>(
          <div key={soon.id} className={main.upcominglist}> 
        <img src={'https://image.tmdb.org/t/p/w500/'+`${soon.backdrop_path}`} className={main.upcoming1}/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
           </div>
           }
           
    
    </div>
    )
}
export default Movies