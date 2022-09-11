import React from 'react'
import { twitter } from '../../helpers/helper'
import Avatar from '../../components/Avatar/AvatarMin'


function ButtonCompany () {
  return (
      <button className='btn'><i class="bi bi-star-fill btn-company"></i></button>
  )
}

export default function Twitter () {

  return (
    <>
      <div className='ms-3 bg-white rounded-2 mt-2 p-4'>
          <h5 className='pb-4'>Twitter Feeds</h5>

          {twitter.map(element => (
            <section className='mb-4'>
              <div key={element.title} className='row py-2'>
                <div className='col-md-2'><Avatar image={element.avatar} /></div>
                <div className='col-md-6 ms-2'>
                  <h6 className='align-center'>{element.title}</h6>
                  <p className='mt-0 text-secondary'>{element.subtitle} <i className='bi bi-patch-check' style={{color: '#8235ee'}}></i></p>
                </div>
                <div className='col text-end'>
                  <ButtonCompany />
                </div>
              </div>
              <div>
                <p>{element.message}</p>
                <span>{element.hashtags}</span>
              </div>
            </section>
          ))}
      </div>
    </>
  )
}