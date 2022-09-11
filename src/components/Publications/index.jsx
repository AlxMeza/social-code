import React, { useState, useContext } from 'react'
import Avatar from '../Avatar/index'
import Comments from '../Comments/index'
import { comments } from '../../helpers/comments'
import CreateComment from '../Comments/CreateComment'
import Context from '../../context/CommentContext'
import Reactions from '../Reactions/index'

export default function Publications ( {data} ) {
  const {commentData, setcommentData} = useContext(Context)
  setcommentData(comments)
  const [publication] = useState(data)

  return (
    <>
      <div className="mt-2 bg-white p-4 rounded-2">
        <section className="row">
          <div className="col-md-1" style={{width: '4.3rem'}}>
            <Avatar image={publication.avatar} />
          </div>
          <div className="col ms-2">
            <h3 className="d-inline">{publication.user}</h3>
            <span className='text-secondary'>{publication.date}</span>
          </div>
        </section>
        <section className="mt-4">
          <p>{publication.message}</p>
          <div className="img-box">
            <img className='img-banner rounded-2' src={publication.image} alt="imagen" />
          </div>
        </section>
        
        <section>
          <Reactions />
          <Comments data={commentData}/>
        </section>
        <section className='mt-5'>
          <CreateComment data={commentData} />
        </section>

      </div>
    </>
  )
}