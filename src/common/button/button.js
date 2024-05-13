import React from 'react';
import './button.scss';

function SubmitButton({ isDisabled, onClick, enabledClassName, disabledClassName  }) {
    return (
      <button disabled={isDisabled} onClick={onClick} className={isDisabled ? disabledClassName : enabledClassName}
      >Verify</button>
    );
  }

  export default SubmitButton;
