import React, {useState} from 'react'
import { s_pages, suggestion } from '../../helpers/helper'
import Avatar from '../../components/Avatar/AvatarMin'
import './styles.css'

function ButtonCompany () {
  return (
    <button className='btn'><i className="bi bi-star-fill btn-company"></i></button>
  )
}

function ButtonFriends () {
  return (
    <button className='btn-friends'><i className="bi bi-person-plus-fill"></i></button>
  )
}

export default function Suggestions ( {title} ) {
  const [data] = useState( title === 'pages' ? s_pages : suggestion)
  const [style] = useState( title === 'pages' ? 'ms-3 bg-white rounded-2 mt-2 p-4' : 'me-3 bg-white rounded-2 mt-2 p-4' )
  console.log(data)

  return (
    <>
      <div className={style}>
          <h5 className='pb-4'>{title === 'pages' ? 'Suggested Pages' : 'Suggestions'}</h5>

          {data.map(element => (
            <div key={element.title} className='row py-2'>
              <div className='col-md-2'><Avatar image={element.avatar} /></div>
              <div className='col-md-6 ms-2'>
                <h6 className='align-center'>{element.title}</h6>
                <p className='mt-0 text-secondary'>{element.subtitle}</p>
              </div>
              <div className='col text-end'>
                {title === 'pages' ? <ButtonCompany /> : <ButtonFriends />}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}