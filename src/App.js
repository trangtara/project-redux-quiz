import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import CurrentAnswers from './components/CurrentAnswers'
import CurrentQuestion from './components/CurrentQuestion'
import SummaryPage from './components/SummaryPage'
import ProgressBar from './components/ProgressBar'

import './styling/app.css'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app__grid">
      <CurrentQuestion />
      <CurrentAnswers />
      <SummaryPage />
      <ProgressBar />
      </main>
    </Provider>
  )
}
