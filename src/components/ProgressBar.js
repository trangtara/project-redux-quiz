import React from 'react';
import { useSelector } from 'react-redux';
// import { quiz } from '../reducers/quiz'

import '../styling/progress.css'

const ProgressBar = () => {
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length);
  const numberOfAnswers = useSelector((state) => state.quiz.answers.length);

  return (
    <p className="progress-bar">You have answered {numberOfAnswers} out of {numberOfQuestions} questions </p>
  );
}
export default ProgressBar;