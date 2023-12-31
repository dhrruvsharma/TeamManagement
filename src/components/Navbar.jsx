import React, { useState } from 'react'
import Tabs from "./Tabs"


const Navbar = () => {
    let [type,settype] = useState("chat")
  return (
    <div>
        <div className='bar'>
        <Tabs type={type} settype={settype}/>
      </div>
      {type === "chat" && (
        <div>
         <h1>chats</h1>
        </div>
      )}
      {type === "tasks" && (
        <div>

        <h1>tasks</h1>
        </div>
      )}
      {type === "progress" && (
        <div>

        <h1>progress</h1>
        </div>
      )}
    </div>
  )
}

export default Navbar