import React, { useEffect, useState, useContext } from 'react'
import './styles.css'
import Context from '../../context/CommentContext'

export default function CreateComment () {
  const [obj, setObj] = useState({})
  const {commentData, setcommentData} = useContext(Context)

  const handleClick = (event) => {
    event.preventDefault()
    setObj({
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      user: 'Kitty Allanson',
      comment: document.getElementById('comment-area').value
    })
    document.getElementById('comment-area').value = ''
  }

  useEffect( () => {
    setcommentData(commentData.concat(obj))
    console.log(commentData)
  }, [obj])

  return(
    <>
      <div className='form-group p-2'>
        <textarea className='form-control' rows='5' placeholder='Add Comment' id='comment-area' ></textarea>
        <button className='mt-2 btn-comment' onClick={handleClick}>Post Comment</button>
      </div>
    </>
  )
}