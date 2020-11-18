import React from 'react';
import { useSelector } from 'react-redux';

import { quiz } from '../reducers/quiz'

const SummaryText = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect === true)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)

  return (
    <>
      <h2 className="summary__header">You got {correctAnswers.length} out of {answers.length} points</h2>
      <div className="summary__container">
        {wrongAnswers.length > 0 
          ? <>
            <h3 className="summary__sub-header">You need to work on these:</h3>
            {wrongAnswers.map((answer) => (
              <p className="summary__text">{answer.question.cuisine}</p>))}
          </>
          : <p>Congrats! Welldone!</p>
        }
      </div>
    </>
  )
};

export default SummaryText;