import React from 'react'
import { polls } from '../../helpers/helper'
import './styles.css'

function Answer ( {answer, percent} ) {
  return (
    <section className="form-check">
      <div className='row'>
        <div className='col-8'>
          <input className="rbutton" type="radio" name="rbutton" id="rbutton" value={answer} />
          <label className="form-check-label ms-2" for="rbutton"> {answer} </label>
        </div>
        <div className='col'>
          <p className="text-secondary">{percent}</p>
        </div>
      </div>
    </section>
  )
}

function Bar ( {percent} ) {
  return (
    <div className='progress mx-4 mb-2' style={{height: '0.5rem'}} >
      <div className="progress-bar bg-company" role='progressbar' style={{width: `${percent}` }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
    </div>
  )
}

export default function Polls () {
  return (
    <>
     <div className='me-3 bg-white rounded-2 mt-2 p-4'>
       <h5>Polls</h5>
        {polls.map(element => (
          <form key={element.question}>
            <h5 className='my-4'>{element.question}</h5>
            <Answer answer={element.answer1} percent={element.percent1} />
            <Bar percent={element.percent1}/>
            <Answer answer={element.answer2} percent={element.percent2}/>
            <Bar percent={element.percent2}/>
            <Answer answer={element.answer3} percent={element.percent3}/>
            <Bar percent={element.percent3}/>
          </form>
        ))}
      </div>
    </>
  )
}