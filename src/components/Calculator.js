import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import DadJoke from './DadJoke';

function CalculatorButton({ label, customClass, onClick }) {
  return (
    <button type="button" className={customClass} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // Event handler for button clicks
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div>
      <div className="dad-joke-container">
        <DadJoke />
      </div>
      <div className="calculator-grid">
        <div className="output">{calculatorData.next || calculatorData.total || '0'}</div>
        <CalculatorButton label="AC" onClick={handleButtonClick} />
        <CalculatorButton label="+/-" onClick={handleButtonClick} />
        <CalculatorButton label="%" onClick={handleButtonClick} />
        <CalculatorButton label="÷" customClass="orange" onClick={handleButtonClick} />
        <CalculatorButton label="7" onClick={handleButtonClick} />
        <CalculatorButton label="8" onClick={handleButtonClick} />
        <CalculatorButton label="9" onClick={handleButtonClick} />
        <CalculatorButton label="x" customClass="orange" onClick={handleButtonClick} />
        <CalculatorButton label="4" onClick={handleButtonClick} />
        <CalculatorButton label="5" onClick={handleButtonClick} />
        <CalculatorButton label="6" onClick={handleButtonClick} />
        <CalculatorButton label="-" customClass="orange" onClick={handleButtonClick} />
        <CalculatorButton label="1" onClick={handleButtonClick} />
        <CalculatorButton label="2" onClick={handleButtonClick} />
        <CalculatorButton label="3" onClick={handleButtonClick} />
        <CalculatorButton label="+" customClass="orange" onClick={handleButtonClick} />
        <CalculatorButton label="0" customClass="span-two" onClick={handleButtonClick} />
        <CalculatorButton label="." onClick={handleButtonClick} />
        <CalculatorButton label="=" customClass="orange" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;
