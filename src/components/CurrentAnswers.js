import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import Button from './Button'

const CurrentAnswers = () => {
  // const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].options)

  return (
    <div>
      {answers.map((answer) => (
        <Button className="answer__btn" text={answer} />
      ))}
    </div>
  )
};

export default CurrentAnswers;