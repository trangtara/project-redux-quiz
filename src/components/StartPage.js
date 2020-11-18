import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SummaryPage from './SummaryPage';
import QuestionPage from './QuestionPage';
import Button from './Button';
import { quiz } from '../reducers/quiz';

import '../styling/startpage.css';

const StartPage = () => {
  const isQuizStarted = useSelector((state) => state.quiz.quizStarted);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(quiz.actions.start());
  };

  return (
    <>
      {!isQuizStarted ? (
        <section className='start__wrapper'>
          <h1 className='start__header'>How good is your knowledge about food culture?</h1>
          <img
            className='start__gif'
            src={'https://media.giphy.com/media/lyGMZjgOA1dXa/giphy.gif'}
            alt='GIF of Sookie drinking cocktail'
          />
          <Button
            text='Start quiz'
            className='start__btn'
            onClick={() => handleClick()}
          />
        </section>
      ) : (
        <>
          <QuestionPage />
          <SummaryPage />
        </>
      )}
    </>
  );
};

export default StartPage;
