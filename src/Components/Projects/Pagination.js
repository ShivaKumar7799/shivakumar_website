import React from 'react'
import ProjectsData from "./Projects.json"

function Pagination(props) {
  let pageNumbers = [];
  for(let i = 0; i < Math.ceil(ProjectsData.length/10) ; i++){
      pageNumbers.push(i + 1)
  }
  return (
    <div>
      <center>
        {pageNumbers.map(page => <button key = {page} onClick={() => {props.pageHandler(page)}} style={{margin : "5px", padding : "10px"}} > {page} </button>)}
      </center>
    </div>
  )
}

export default Pagination