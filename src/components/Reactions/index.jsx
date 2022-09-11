import React from 'react'
import './styles.css'

export default function Reactions () {

  return (
    <>
      <div className='row py-1 px-2'>
        <div className='col-md-8'><button className='btn'><i className='bi bi-heart-fill btn-heart me-2'></i>1.2K</button></div>
        <div className='col'> <button className='btn'><i className="bi bi-chat-left-fill btn-reaction me-2"></i>1.2K</button></div>
        <div className='col'><button className='btn'><i className="bi bi-share-fill btn-reaction me-2"></i>1.2K</button></div>
      </div>
    </>
  )
}