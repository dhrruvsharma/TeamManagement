import React from 'react'
import "./AddProjectcss.css"

const AddProject = ({profunc}) => {

  let hml=()=>{
    profunc();
    console.log("AddProject")
  }

  return (
    <div className='add-project-button'>
    <button onClick={profunc} style={{backgroundColor:"#302c51" , color:"white"}}>Add Project</button>
</div>
  )
}

export default AddProject