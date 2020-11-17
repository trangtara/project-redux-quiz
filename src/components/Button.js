import React from 'react'

const Button = ({ onClick, text, className, disabled }) => {
  return (
    <button disabled={disabled} className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;