import React from 'react'
import Signin from './SignIn';
import Signout from './Signout'
import Step2a from './Step2a'
import Step1a from './Step1a'
import Step1b from './Step1b'
import Step2b from './Step2b'
import Step3 from './step3';
// import Step2 from './Step2'
// import Step3 from './step3'
import Home from './Home'
// import No from './No'

import { Route, Routes, Outlet} from 'react-router-dom'
import Main from './Main';
import Tv from './Tvshows';
import Movies from './Movies';
import Discover from './Discover';
import Search from './Search';


function App() {
 

 
return(
  <div>

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="signin" element={<Signin />}></Route>
  <Route path="signin/mainpage" element={<Main />}></Route>
  <Route path="signin/step1b" element={<Step1b />}></Route>
  <Route path="step1b/step2a" element={<Step2a />}></Route>

  
  <Route path="signup" element={<Step1a />}/> 
  <Route path="step1b" element={<Step1b />} />
  <Route path="step2a" element={<Step2a />} /> 
  <Route path="step2b" element={<Step2b />} />
 
  <Route path="step3" element={<Step3 />} />
  <Route path="signout" element={<Signout />} />
  <Route path="mainpage" element={<Main />}/> 
  <Route path="tvshows" element={<Tv />}/> 
  <Route path="movies" element={<Movies />}/> 
  <Route path="discover" element={<Discover />}/> 
  <Route path="search" element={<Search />}/> 
 
  
 </Routes>
 <Outlet /> 

 </div>

)

}


export default App;
