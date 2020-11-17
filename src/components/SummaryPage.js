import React from 'react';
import Button from './Button'

import '../styling/summary.css'

const SummaryPage = () => {
  return (
    <section className="summary__wrapper">
      <h2 className="summary__header">Congrats!</h2>
      <div className="summary__container">
        <h3 className="summary__sub-header">You need to work on these:</h3>
        <p className="summary__text">Dont leave me empty</p>
      </div>
      <Button
        className="summary__btn"
        text="Redo" />
    </section>
  );
}

export default SummaryPage;