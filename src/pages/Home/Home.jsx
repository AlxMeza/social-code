import React from 'react'
import { Link } from 'wouter'
import './styles.css'


export default function Home () {

  return (
    <>
      <div>
        <nav className='navbar navbar-dark' style={{ backgroundColor: '#a46cf5' }} >
          <div className='px-5 container-fluid'>
            <Link className='navbar-brand' to='/'><i className='bi bi-file-code-fill'></i> Social Code</Link>
            <Link className='btn-home' to='/profile' >Let´s start</Link>
          </div>
        </nav>
        <section className='banner'>
          <h1 className='header-banner'>
            <span>Programing</span>
            <span>Hacking</span>
            <span>Coding</span>
          </h1>
        </section>
      </div>
    </>
  )
}