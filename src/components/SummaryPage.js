import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import SummaryText from './SummaryText';
import { quiz } from '../reducers/quiz';
import '../styling/summary.css';

const SummaryPage = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  return (
    <>
      {isQuizOver 
      && <section className="summary__wrapper">
        <SummaryText />
        <Button
          className="summary__btn"
          text="Restart quiz"
          onClick={() => dispatch(quiz.actions.restart())} />
      </section>}
    </>
  );
};

export default SummaryPage;