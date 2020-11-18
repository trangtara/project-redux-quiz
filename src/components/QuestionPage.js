import React from 'react';
import { useSelector } from 'react-redux';

import QuestionGif from './QuestionGif';
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
        <QuestionGif />
        <CurrentAnswers />
        <ProgressBar />
      </>}
    </>
  )
}

export default QuestionPage;