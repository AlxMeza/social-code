import React, { useState } from 'react'

const CommentContext = React.createContext({})

export function CommentContextProvider ({ children }) {
  const [commentData, setcommentData] = useState([])

  return <CommentContext.Provider value={ {commentData, setcommentData} }>
    { children }
  </CommentContext.Provider>

}

export default CommentContext