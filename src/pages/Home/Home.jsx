import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const[category,setCategory] = useState(0)
  function _setCategory(c){
    // console.log(c)
    setCategory(c)
  }
  return (
    <>
    <Sidebar sidebar = {sidebar} category ={category} setCategory ={_setCategory}/>
    <div className={`container ${sidebar? "" : "large-container"}`}>
      <Feed category={category} />
    </div>
    </>
  )
}

export default Home