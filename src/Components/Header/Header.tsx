import React, { useEffect, useState } from 'react'
import "./Header.css"
import "../Question Container/Questions.css"

type props={
  marks:number|undefined
  flag:boolean
  checkBoxMarks:number
  wrongCheckBoxMarks:number
}

export const Header: React.FC<props> = ({ marks = 0, flag, checkBoxMarks, wrongCheckBoxMarks }) => {
//   console.log(marks)
  console.log("checkBoxMarks",checkBoxMarks)
  console.log("wrongCheckBoxMarks", wrongCheckBoxMarks)

  const [handler,setHandler]=useState<number>(0)
  useEffect(()=>{
    wrongCheckBoxMarks ? setHandler(2) : setHandler(checkBoxMarks)
  })
  
  return (
    <div className='qaQuiz d-flex w-100'>
      <div className="w-50">
        <div className="d-flex">
          <div><h1>Q/A QUIZ</h1></div>
          <div className='d-flex bossColoredDiv'>
            <div className="wrongAnswer align-self-center coloredDiv" >Wrong</div>
            <div className="rightAnswer align-self-center coloredDiv">Right</div>
            <div className="skipped align-self-center coloredDiv">Skipped</div>
            <div className="addAnotherOption align-self-center coloredDiv">Choose more options</div>
          </div>
        </div>
        
      </div>
      <div className='marks w-50' >
        {flag && <p style={{ float: "right" }}>Marks : {(marks + handler)-wrongCheckBoxMarks}/10</p>}
      </div>
    </div>
  )
}
