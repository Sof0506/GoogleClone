import React from 'react'

function Avatar({url,className}) {
  return (
    <img 
    className={`h-10 w-10 rounded-full cursor-pointer
     animate-pulse transition duration-150 transform hover:scale-110 ${className}`}
    
    loading='lazy' src={url} alt="profile picture"/>
    
    
  )
}

export default Avatar