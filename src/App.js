import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { quiz } from 'reducers/quiz';
import StartPage from './components/StartPage';
import './styling/app.css'

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app__grid">
        <StartPage />
      </main>
    </Provider>
  )
};
