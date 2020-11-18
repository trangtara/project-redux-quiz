import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';
import Button from './Button';
import '../styling/answer.css';

const CurrentAnswers = () => {
  const answers = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].options);
  const currentQuestionId = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].id);
  const correctAnswerIndex = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].correctAnswerIndex);

  const dispatch = useDispatch();
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswerIndex, setUserAnswerIndex] = useState(-1);

  const checkIfCorrect = (answerIndex) => {
    if (answerIndex === correctAnswerIndex) {
      return true;
    } else return false;
  };

  const handleClick = (answerIndex) => {
    console.log(answerIndex);
    console.log(currentQuestionId);
    setUserAnswerIndex(answerIndex);
    dispatch(quiz.actions.submitAnswer({ questionId: currentQuestionId, answerIndex }));
    setIsCorrect(checkIfCorrect(answerIndex));
    setIsAnswered(true);
    dispatch(quiz.actions.setScore({ increaseScore: checkIfCorrect(answerIndex) }));
  };

  const handleNextButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setIsAnswered(false);
    setUserAnswerIndex(-1);
  };

  return (
    <div className="answer__wrapper">
      {!isCorrect && isAnswered &&
      <div className="answer__container">
        <p className="answer__text">The correct answer is "{answers[correctAnswerIndex]}"</p>
      </div>}
      {answers.map((answer, index) => (
        <Button
          key={index}
          onClick={() => handleClick(index)}
          className={(isCorrect && index === userAnswerIndex) ? 'answer__btn_correct' : (!isCorrect && index === userAnswerIndex ? 'answer__btn_wrong': 'answer__btn')}
          text={answer} 
          disabled={isAnswered} />
      ))}
      {isAnswered && <Button
        className="question__next-btn"
        text="Next"
        onClick={() => handleNextButtonClick()} />}
    </div>
  )
};

export default CurrentAnswers;