import React,{useEffect, useState} from 'react'
import main from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import netflixlogo from './netflixlogo copy.jpg'
import axios from 'axios'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Tv= ()=>{
    const navigate= useNavigate()
    const[poptvshows, setpoptvshows]= useState([])
    const[toptvshows, settoptvshows]= useState([])
    const[airing, setairing]= useState([])
    const[latest, setlatest]= useState([])
    const[home, setHome]= useState([])
    const [show, setshow]= useState()

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/1399?api_key=384a26b16e56aa6177f73139defe1b77')
    .then(response =>{
      setHome(response.data)

      console.log(response.data)    })
}, [])

useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/tv/popular?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
  .then(response =>{
    setpoptvshows(response.data.results)

    console.log(response.data.results)    })
}, []) 

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
    .then(response =>{
      settoptvshows(response.data.results)
      console.log(response.data)    })
  }, [])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=2')
    .then(response =>{
      setairing(response.data.results)
      console.log(response.data)    })
  }, [])

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/1400/recommendations?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1')
    .then(response =>{
      setlatest(response.data.results)
      console.log(response.data)    })
  }, [])

    return(

        <div className={main.app}>
<div className={main.navbar}>    
<FontAwesomeIcon icon={faBars}  className={main.ham}  onClick={()=>setshow(!show)}/>
{
          show? <div className={main.sidebar}>
            <p>My Account</p>
            <p onClick={()=>navigate('/mainpage')}>Home</p>
         <p onClick={()=>navigate('/movies')}>Movies</p>
         <p>Tv shows</p>
         <p onClick={()=>navigate('/discover')}>Discover</p>
         <p> Trending</p>
       
       
       </div>:null
        }

    <img src={netflixlogo} className={main.logo} alt="non"  />
    <p className={main.points} onClick={()=>navigate('/mainpage')}> Home</p>
    <p className={main.points} onClick={()=>navigate('/tvshows')}>Movies</p>
    <p className={main.points}>Tv shows</p>
    <p className={main.points} onClick={()=>navigate('/discover')}>Discover</p>

    <p className={main.points}>Trending</p>

<input type={"search"} className={main.search} placeholder={'Search...'} />
<p className={main.firstp} onClick={()=>navigate('/signout')}>Sign Out</p>
</div>

    {
        <div>
          <img src={'https://image.tmdb.org/t/p/w500//rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg'} className={main.cover}  alt="non"/>
          <div  className={main.coverdetails}>
          <h1 className={main.covertitle}> {home.title}</h1>
          </div>
        
          <div className={main.desc}><h2> Popular Tvshows</h2></div> 
          <div className={main.upcoming} > 
        {poptvshows && poptvshows.map((series)=>(
          <div key={series.id} className={main.upcominglist}> 
        <img src={`https://image.tmdb.org/t/p/w500/${series.backdrop_path}`} className={main.upcoming1}  alt="non"/>
        </div>
        ))}
      </div>

      <div className={main.desc}><h2> Top Tvshows</h2></div> 
      <div className={main.upcoming} > 
        {toptvshows && toptvshows.map((rated)=>(
          <div key={rated.id} className={main.upcominglist}> 
        <img src={`https://image.tmdb.org/t/p/w500/${rated.backdrop_path}`} className={main.upcoming1}  alt="non"/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

      <div className={main.desc}><h2> Tvshows airing today</h2></div> 
      <div className={main.upcoming} > 
        {airing && airing.map((today)=>(
          <div key={today.id} className={main.upcominglist}> 
        <img src={`https://image.tmdb.org/t/p/w500/${today.backdrop_path}`} className={main.upcoming1}  alt="non"/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>

      <div className={main.desc}><h2> Recommended Tvshows</h2></div> 
      <div className={main.upcoming} > 
        {latest && latest.map((newest)=>(
          <div key={newest.id} className={main.upcominglist}> 
        <img src={`https://image.tmdb.org/t/p/w500/${newest.backdrop_path}`} className={main.upcoming1}  alt="non"/>
          {/* <p>{later.title}</p> */}
        </div>
        ))}
      </div>
           </div>
           }
           
    
    </div>
    )
}
export default Tv