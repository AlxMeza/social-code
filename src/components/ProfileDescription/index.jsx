import React from 'react'
import './styles.css'

const profileDescription = {
  user: 'Kitty Allanson',
  profession: 'UI / UX Designer'
}

export default function ProfileDescription () {
  const { user, profession } = profileDescription

  return (
    <>
      <div className='des-container'>
        <h1>{user}</h1>
        <h3>{profession}</h3>
      </div>
    </>
  )
}