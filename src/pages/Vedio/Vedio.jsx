import React from 'react'
import './Vedio.css'
import Playvedio from '../../Components/Playvedio/Playvedio'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'



const Vedio = () => {
    const {videoId,categortId} = useParams();
    return (
    <div className='play-container'>
        <Playvedio videoId ={videoId}/>
        <Recommended/>
    </div>
  )
}

export default Vedio