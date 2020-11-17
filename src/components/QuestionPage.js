import React from 'react';
import { useSelector } from 'react-redux';

import CurrentQuestion from './CurrentQuestion';
import CurrentAnswers from './CurrentAnswers';
import ProgressBar from './ProgressBar';

const QuestionPage = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <>
      {!isQuizOver &&
      <>
        <CurrentQuestion />
        <CurrentAnswers />
        <ProgressBar />
      </>}
    </>
  )
}

export default QuestionPage;