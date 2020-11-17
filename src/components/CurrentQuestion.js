import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import Button from './Button'

const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <p>Oh no! I could not find the current question!</p>
  }

  return (
    <div className="question__wrapper">
      <h2 className="question__header">Question: {question.questionText}</h2>
      <Button
        className="question__next-btn"
        text="Next"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())} />
    </div>
  )
};

export default CurrentQuestion;
