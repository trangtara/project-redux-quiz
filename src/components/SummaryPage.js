import React from 'react';

import Button from './Button';
import SummaryText from './SummaryText';
import { useSelector } from 'react-redux';

import '../styling/summary.css'

const SummaryPage = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver);
  return (
    <>
      {isQuizOver 
      && <section className="summary__wrapper">
        <SummaryText />
        <Button
          className="summary__btn"
          text="Redo" />
      </section>}
    </>
  );
};

export default SummaryPage;