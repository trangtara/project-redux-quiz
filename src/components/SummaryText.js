import React from 'react';
import { useSelector } from 'react-redux';

import '../styling/summary.css'

// import { quiz } from '../reducers/quiz'

const SummaryText = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect === true)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)

  return (
    <>
      <h2 className="summary__header">You scored <p className='summary__score'>{correctAnswers.length} out of {answers.length}</p> points!</h2>
      <div className="summary__container">
        {wrongAnswers.length > 0 
          ? <>
            <h3 className="summary__sub-header">You are oblivious of these food cultures:</h3>
            {wrongAnswers.map((answer) => (
              <p className="summary__text">{answer.question.cuisine}</p>))}
          </>
          : <p className="summary__text">Cool! You know all about food culture!</p>
        }
      </div>
    </>
  );
};

export default SummaryText;