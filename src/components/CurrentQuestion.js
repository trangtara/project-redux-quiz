import React from 'react';
import { useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';
import '../styling/questions.css'

const CurrentQuestion = () => {
// const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <p>Oh no! I could not find the current question!</p>;
  }

  return (
    <div className="question__wrapper">
      <h2 className="question__header">Question: {question.questionText}</h2>
    </div>
  );
};

export default CurrentQuestion;
