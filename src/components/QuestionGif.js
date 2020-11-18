import React from 'react';
import { useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';

import '../styling/questions.css'

const QuestionGif = () => {
  const gif = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].URL);


return (
<div className='gif__wrapper'>
  <img className='gif__img' src={gif} alt='gif'/>
</div>

)

}

export default QuestionGif;