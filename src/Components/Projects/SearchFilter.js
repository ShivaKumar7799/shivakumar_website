import React, { useEffect, useState , useContext, useRef} from 'react'
import ProjectsData from "./Projects.json"
import './Projects.css'
import Pagination from './Pagination';
import "./SearchFilter.css"
import { AppContext } from '../../App';


function Projects() {
  const [perPage, setPerPage] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const user = useContext(AppContext);
  const {searchTerm, setSearchTerm} = user;
  const inputRef = useRef()

  useEffect( () => {
    setPerPage(ProjectsData.slice(0,10));
    inputRef.current.focus()
  },[])

  const pageHandler = (pageNumber) => {
      setPerPage(ProjectsData.slice((pageNumber * 10) - 10, pageNumber * 10))
  }
  
  return (
    <div className='projects_container' >
        <h1 className='project_heading' > Front End Projects</h1> 
        <div className='searchInput' >
        <input ref={inputRef} value={searchTerm} type="text" placeholder='Search...' onChange={ event => {setSearchTerm(event.target.value)}} />
        </div>
        {ProjectsData.filter((val) => {
          if(searchTerm == ""){
            return val
          } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
          }
        }).map(item => {
          return(
          <div className='project_details' key = {item.id}>
              <div> 
                  <h2> {item.id} : {item.title} </h2>
                  <p> <span className='link_heading' > Netlify Link :</span>  <a href= {item.netlifyLink} target="_blank" > {item.netlifyLink}</a> </p>
                  <p> <span className='link_heading' > GitHub Link :</span> <a href= {item.githubLink} target= "_blank" >{item.githubLink}</a> </p>
              </div>
              <div>
                 <a href={item.netlifyLink} target="_blank" ><img src={item.image} alt = {item.title} /></a>  
              </div>
          </div>
          )
        }) }
      {/* <Pagination  pageHandler = {pageHandler} /> */}
    </div>
  )
}

export default Projects