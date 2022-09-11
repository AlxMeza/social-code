import React from 'react'
import { photos } from '../../helpers/helper'
import './styles.css'

export default function Photos () {

  return (
    <>
      <div className='me-3 bg-white rounded-2 mt-2 p-4'>
        <div className='row'>
          <div className='col-6 align-self-center'><h5>Latest Photos</h5></div>
          <div className='col'><button className='btn-buy'>Buy Now</button></div>
        </div>
        <div className='row mt-4 mb-3'>
          {photos.map(photo => (
            <div className='col-4 mb-2'>
              <img className='img-photos' src={photo.url} alt="avatar" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}