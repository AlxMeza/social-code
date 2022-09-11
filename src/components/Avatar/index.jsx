import React, {useState} from 'react'
import './styles.css'

export default function Avatar( {image} ) {
  const [avatar] = useState(image)

  return (
    <>
      <img className='avatar' src={avatar} alt="avatar" />
    </>
  )

}