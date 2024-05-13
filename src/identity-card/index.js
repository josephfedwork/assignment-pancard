import React, { useState } from 'react';
import './index.scss'; 
import Verification from "../svg-components/verification";
import Input from "../common/input/input";
import SubmitButton from "../common/button/button";
function IdentityCard() {
    const [pan, setPan] = useState('');
    const [error, setError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setPan(inputValue);
      setError('');
      if (inputValue.length === 10) {
        setIsSubmitDisabled(false);
      } else {
        setIsSubmitDisabled(true);
      }
    };
  
    const handleSubmit = () => {
      const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      if (!panRegex.test(pan)) {
        setError('Invalid PAN card number');
      } else {
        setError('');
      }
    };

    
    return (
        
        <div className="custom-card">
            <div className='card-title-wrap'>
                <Verification />
                <div className='card-title'>
                    <h4>PAN Verification</h4>
                    <p className='card-title--desc'>As per regulations, it is mandatory to verify your PAN details.</p>
                </div>
            </div>

            <div className='card-body-wrap'>
                <img src='/images/dummy-pan.svg' alt='Dummy PAN' className='pan-image' />

                <div className='card-form'>
                    <Input
                        label="Enter 10-digit PAN"
                        onInputChange={handleInputChange}
                        error={error}
                        placeholder={"Enter 10-digit PAN"}
                    />
                    <SubmitButton 
                    isDisabled={isSubmitDisabled} 
                    onClick={handleSubmit} 
                    enabledClassName="btn btn-primary"
                    disabledClassName="btn" />
                </div>
            </div>
        </div>
    );
}

export default IdentityCard;
