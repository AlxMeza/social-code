import React from 'react'
import './styles.css'
import ProfileButtons from '../ProfileButtons'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import ProfileDescription from '../ProfileDescription/index'

export default function Banner () {

  return(
    <>
      <div>
        <div className='img-box'>
          <ProfilePhoto />
          <ProfileDescription />
          <img className='img-banner rounded-top' src="https://picsum.photos/1200/400" alt="banner" />
          {/* <img className='img-banner rounded-top' src="https://source.unsplash.com/random/800x300/?nature" alt="Banner"/> */}
          <div className='bg-white rounded-bottom h-25 row'>
            <div className='col-md-2'></div>
            <div className='col-md-10'><ProfileButtons /></div>
          </div>
        </div>
      </div>
    </>
  )
}