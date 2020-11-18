import React from 'react';
import { useSelector } from 'react-redux';

import QuestionGif from './QuestionGif';
import CurrentQuestion from './CurrentQuestion';
import CurrentAnswers from './CurrentAnswers';
import ProgressBar from './ProgressBar';
import Score from './Score';

const QuestionPage = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <>
      {!isQuizOver &&
      <>
        <Score />
        <CurrentQuestion />
        <QuestionGif />
        <CurrentAnswers />
        <ProgressBar />
      </>}
    </>
  );
};

export default QuestionPage;