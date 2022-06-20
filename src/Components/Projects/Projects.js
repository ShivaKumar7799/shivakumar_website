import React, { useEffect, useState , useContext, useRef} from 'react'
import ProjectsData from "./Projects.json"
import './Projects.css'
import Pagination from './Pagination';
import { AppContext } from '../../App';

function Projects() {
  const [perPage, setPerPage] = useState([]);
  const user = useContext(AppContext);
  const {searchTerm, setSearchTerm} = user;
  const inputRef = useRef(null);

  useEffect( () => {
    setPerPage(ProjectsData.slice(0,10));
  },[])

  const pageHandler = (pageNumber) => {
      setPerPage(ProjectsData.slice((pageNumber * 10) - 10, pageNumber * 10))
  }
  
  return (
    <div className='projects_container' >
        
        <h1 className='project_heading' > Front End Projects</h1> 
        <div className='projectsSearch' >
        <input id = "projectsSearchInput" ref={inputRef} value={searchTerm} placeholder='Search' onChange = { (event) => setSearchTerm(event.target.value)} /> 
        </div>
        {perPage.map(item => {
          return(
          <div className='project_details' key = {item.id}>
              <div className = "project_links" > 
                  <h2> {item.id} : {item.title} </h2>
                  <p> <span className='link_heading' > Netlify Link :</span>  <a href= {item.netlifyLink} target="_blank" > {item.netlifyLink}</a> </p>
                  <p> <span className='link_heading' > GitHub Link :</span> <a href= {item.githubLink} target= "_blank" >{item.githubLink}</a> </p>
              </div>
              <div className = "project_images" >
                 <a href={item.netlifyLink} target="_blank" ><img src={item.image} alt = "image" /></a>  
              </div>
          </div>
          )
        })}
       <Pagination  pageHandler = {pageHandler} />
    </div>
  )
}

export default Projects