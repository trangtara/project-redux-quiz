import React from 'react';

import SummaryPage from './SummaryPage';
import QuestionPage from './QuestionPage';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz'

import '../styling/summary.css'

const StartPage = () => {
  const isQuizStarted = useSelector((state) => state.quiz.quizStarted);
  const dispatch = useDispatch();

const handleClick = () => {
  dispatch(quiz.actions.start())
  console.log('haj')
}

return (
  <>
  {!isQuizStarted ? 
  <>
    <h2 className='start__header'>Hello</h2>
    <Button text='Start quiz' className='start__btn' onClick={() => handleClick()} />
    </> : <> 
    <QuestionPage />
    <SummaryPage />
    </>
  }
  </>
)
}

export default StartPage;