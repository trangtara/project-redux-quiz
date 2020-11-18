import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <div className="score__wrapper">
      <p className="score__text">{score} {score ===1 ? 'points' : 'point'}</p>
    </div>
  )
}

export default Score;