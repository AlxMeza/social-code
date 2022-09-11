import React from 'react'
import Banner from '../../components/Banner/Banner'
import Publications from '../../components/Publications/index'
import { publications } from '../../helpers/publications'
import { CommentContextProvider } from '../../context/CommentContext'
import About from '../../components/About/index'
import Suggestions from '../../components/Suggestions/index'
import Twitter from '../../components/Twitter/index'
import Polls from '../../components/Polls/index'
import Photos from '../../components/Photos/index'

const element = {
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
  user: 'Charles Wattson',
  date: new Date().toDateString(),
  message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  image: 'https://unsplash.it/800/400?random'
}

export default function Profile () {

  return (
    <>
      <CommentContextProvider> 
        <div className='mb-4'>
          <Banner />
          <div className="row">
            <div className='col-md-3'>
              <About />
              <Suggestions title='pages'/>
              <Twitter />
            </div>
            <div className='col-md-6'>
              <Publications data={element} />
              {publications.map(publication => (
                <Publications key={publication.user} data={publication} />
              ))}
            </div>
            <div className='col-md-3'>
              <Photos />
              <Suggestions title='friends'/>
              <Polls />
            </div>
          </div>
        </div>
      </CommentContextProvider>
    </>
  )
}