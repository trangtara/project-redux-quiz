import React from 'react';

const SummaryGif = ({gif}) => {
 
return (
<div className='gif__wrapper'>
  <img className='gif__img' src={gif} alt='gif'/>
</div>
)
}

export default SummaryGif;