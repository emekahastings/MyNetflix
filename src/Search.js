import React, { useState } from 'react'
import main from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import short from './shortnetflixlogo.png'

const Search = ()=>{
    const navigate= useNavigate()
    const [search, setsearch] =useState([])
    function se(event){ 
     let searchparam= event.target.value
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=384a26b16e56aa6177f73139defe1b77&language=en-US&page=1&query='+`${searchparam}`)
        .then(response =>{
          setsearch(response.data.results)
      
          console.log(response.data.results)    })
 }
 
return(
    <div className={main.full}>
    <div className={main.app} >
<div className={main.navbar}>    
<FontAwesomeIcon icon={faArrowLeft}  className={main.back} onClick={()=>navigate(-1)} />

<input type={"search"} className={main.searched}  placeholder={'Search Movie...'} onChange={se}  /> <FontAwesomeIcon icon={faMagnifyingGlass}  className={main.look} /> 
</div>
</div>

<div className={main.desc}><h2> Top Searches</h2></div>
   
   <main className={main.all}>
      <div className={main.upcomingfall} > 
        {search && search.map((seek)=>(
          <div key={seek.id} className={main.upcominglist}> 
   
        <img src={'https://image.tmdb.org/t/p/w500/'+`${seek.backdrop_path}`} className={main.upcomingfall1}/>
          {/* <p>{later.title}</p> */}
            <div className={main.class}>
             <h4 className={main.movie}>{seek.title}</h4>
          
            </div>
       </div>
        ))}
         </div>
</main>
 
</div>

)
}

export default Search