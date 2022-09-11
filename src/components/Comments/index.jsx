import React from 'react'
import Avatar from '../Avatar/AvatarMin'

export default function Comments ( {data} ){

  return (
    <>
      {data.map( (comment) => (
        <div key={comment.user} className='mt-4 px-3'>
          <div className='row'>
            <div className='col-md-1'><Avatar image={comment.avatar} /></div>
            <div className='ms-1 col'>
              <h5 className='align-center'>{comment.user}</h5>
              <p>{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}