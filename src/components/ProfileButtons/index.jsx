import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function ProfileButton() {
  
  return(
    <>
      <div className='row'>
        <div className='col-md-8 p-4'>
          <Link className='link ms-2 link-active' to='/profile'>Feed</Link>
          <Link className='link ms-2' to='/profile'>About</Link>
          <Link className='link ms-2' to='/profile'>Photos</Link>
          <Link className='link ms-2' to='/profile'>Friends</Link>
        </div>
        
        <div className='col-md-4 p-4 text-end'><Link className='link-active' to='/profile'>Edit</Link></div>
      </div>

    </>
  )
}