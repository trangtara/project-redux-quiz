import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, cuisine: 'Spanish', questionText: 'What did Jamie Oliver do to make the spanyards go berzerk', options: ['He suggested putting butter on bread', 'He made a twist on Paella, adding chorizo', 'He served his gazpacho warm'], correctAnswerIndex: 1, URL: 'https://media.giphy.com/media/3oKIPqVJNVpXJDAqQg/giphy.gif' },
  { id: 2, cuisine: 'Japanese', questionText: 'What is one of the most offensive things to do in Japan?', options: ['To not finish your food', 'To finish you food and put your utencils on the wrong side of the plate', 'To finish your food and ask for more'], correctAnswerIndex: 0, URL: 'https://media.giphy.com/media/yGEbmgiCJYu3u/giphy.gif' },
  { id: 3, cuisine: 'Italian', questionText: 'What will make an italian go crazy?', options: ['To cut your pasta into teeny tiny bits', 'To serve polenta to a stew', 'To offer the first sip of your wine to your dinner companion'], correctAnswerIndex: 0, URL: 'https://media.giphy.com/media/135E47VKw6TM6A/giphy.gif' },
  { id: 4, cuisine: 'French', questionText: 'What is a faux pas (big misstep) in France?', options: ['Adding sauce to your food', 'Following the breadiquette', 'Asking for more food'], correctAnswerIndex: 2, URL:'https://media.giphy.com/media/Yxq7SC6yTAwZG/source.gif'  },
  { id: 5, cuisine: 'Portugese', questionText: 'What happens if you ask a portugese for salt and pepper?', options: ['You will get it straight away', 'You will get the boot straight away'], correctAnswerIndex: 1, URL: 'https://media.giphy.com/media/3o7P4F86TAI9Kz7XYk/giphy.gif'  }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizStarted: false,
  quizOver: false,
  score: 0
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    start: (state) => {
      state.quizStarted = true;
    },

    setScore: (state, action) => {
      const { increaseScore } = action.payload
      if (increaseScore) { state.score += 1 }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
