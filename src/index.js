import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes, Route, Link, Navigate, Outlet , useParams, useNavigate, useLocation, NavLink} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/myapp' element={<Navigate replace to= '/learn'/>}/> 

    <Route path='/learn' element={<Learn/>}> 
     <Route path='courses' element={<Courses/>}>
      <Route path=':id' element={<Params/>}/>

      
     </Route>
     <Route path='bundle' element={<Bundle/>}/>
    </Route>
    



  </Routes>
  </BrowserRouter>
    
    
  
);


function Home  () {
return(
  <div>
    <Link to = '/learn' className='Home'>Home</Link>
  </div>
)
}

function Learn  () {
  return(
    <div>
      Learn
      <div>
          <Link to = "/learn/courses" >Courses </Link>
          <Link to = "/learn/bundle">Bundle </Link>
      </div>

      
          <Outlet/>


    </div>
  )
  }

  function Courses  () {
    const course = ["React" , "Vue" , "Angular"]
    const random = course[Math.floor(Math.random()*course.length)]
    return(
      <div>

        <div>
          <NavLink 
          style={({isActive})=>{
            return{

              background: isActive? "blue" : "red",

            };
          }} 
          to ={`/learn/courses/${random}`}>{random}</NavLink>

          <NavLink to = "/learn/courses/test">Test</NavLink>
          </div>
          <Outlet/>
      </div>


    

    


    )
    }

    function Bundle  () {
      return(
        <div>Bundle</div>
      )
      }
      
      function Params  () {
        const {id} = useParams();
        const navigate = useNavigate();
        return(
          <div>showing you the url : {id} <br/>
          <button onClick={()=>{navigate("/dashboard", {state: id})}}>Price</button>
          </div>
        )
        }
        
function Dashboard () {
  const Location = useLocation()
  return(
    <div>
      Price is {Location.state}
    </div>
  )
}

reportWebVitals();
