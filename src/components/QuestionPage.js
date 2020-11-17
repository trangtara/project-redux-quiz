import React from 'react';

import CurrentQuestion from './CurrentQuestion';
import CurrentAnswers from './CurrentAnswers';
import ProgressBar from './ProgressBar';

const QuestionPage = () => {

  return (
    <main>
      <CurrentQuestion />
      <CurrentAnswers />
      <ProgressBar />
    </main>
  )
}

export default QuestionPage;