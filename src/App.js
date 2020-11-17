import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import SummaryPage from './components/SummaryPage';
import QuestionPage from './components/QuestionPage';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <QuestionPage />
      <SummaryPage />
    </Provider>
  )
};
