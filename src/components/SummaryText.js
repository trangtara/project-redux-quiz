import React from 'react';

const SummaryText = () => {
  return (
    <>
      <h2 className="summary__header">Congrats!</h2>
      <div className="summary__container">
        <h3 className="summary__sub-header">You need to work on these:</h3>
        <p className="summary__text">Dont leave me empty</p>
      </div>
    </>
  )
};

export default SummaryText;