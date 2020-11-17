import React from 'react';

import Button from './Button';
import SummaryText from './SummaryText';

const SummaryPage = () => {
  return (
    <section className="summary__wrapper">
      <SummaryText />
      <Button
        className="summary__btn"
        text="Redo" />
    </section>
  );
};

export default SummaryPage;