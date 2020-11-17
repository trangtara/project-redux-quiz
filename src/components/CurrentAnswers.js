import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import Button from './Button'

import '../styling/answer.css'

const CurrentAnswers = () => {
  // const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].options);
  const currentQuestionId = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].id);
  const dispatch = useDispatch();
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (answerIndex) => {
    console.log(answerIndex);
    console.log(currentQuestionId);
    dispatch(quiz.actions.submitAnswer({ questionId: currentQuestionId, answerIndex }));
    setIsAnswered(true);
  }

  const handleNextButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setIsAnswered(false);
  }

  return (
    <div className="answer__wrapper">
      {answers.map((answer, index) => (
        <Button onClick={() => handleClick(index)} className="answer__btn" text={answer} disabled={isAnswered} />
      ))}
      {isAnswered && <Button
        className="question__next-btn"
        text="Next"
        onClick={() => handleNextButtonClick()} />}
    </div>
  )
};

export default CurrentAnswers;