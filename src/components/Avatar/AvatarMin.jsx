import React, {useState} from 'react'
import './styles.css'

export default function AvatarMin( {image} ) {
  const [avatar] = useState(image)

  return (
    <>
      <img className='avatarmin' src={avatar} alt="avatar" />
    </>
  )

}