import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import CurrentAnswers from './components/CurrentAnswers'
import CurrentQuestion from './components/CurrentQuestion'
import SummaryPage from 'components/SummaryPage'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
      <CurrentAnswers />
      <SummaryPage />
    </Provider>
  )
}
