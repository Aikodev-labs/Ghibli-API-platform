import React from 'react'
import totoro from '../assets/images/totoro.gif'

const TotoroLoader = () => {
  return (
    <img className='w-3/4 m-auto h-full object-contain animate-pulse' src= {totoro} alt="totoroLoader" />
  )
}

export default TotoroLoader