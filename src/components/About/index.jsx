import React from 'react'
import { about } from '../../helpers/helper'

export default function About() {

  return (
    <>
      <div className="ms-3 bg-white rounded-2 mt-2 p-4">
        <h5>{about.about}</h5>
        <p>{about.about_des}</p>
        <h5>{about.join}</h5>
        <p>{about.join_des}</p>
        <h5>{about.lives}</h5>
        <p>{about.lives_des}</p>
        <h5>{about.email}</h5>
        <p>{about.email_des}</p>
        <h5>{about.website}</h5>
        <p>{about.website_des}</p>
      </div>
    </>
  )
}