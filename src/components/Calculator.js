import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ label, customClass }) {
  return (
    <button type="button" className={customClass}>
      {label}
    </button>
  );
}

function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">0</div>
      <CalculatorButton label="AC" />
      <CalculatorButton label="+/-" />
      <CalculatorButton label="%" />
      <CalculatorButton label="/" customClass="orange" />
      <CalculatorButton label="7" />
      <CalculatorButton label="8" />
      <CalculatorButton label="9" />
      <CalculatorButton label="X" customClass="orange" />
      <CalculatorButton label="4" />
      <CalculatorButton label="5" />
      <CalculatorButton label="6" />
      <CalculatorButton label="-" customClass="orange" />
      <CalculatorButton label="1" />
      <CalculatorButton label="2" />
      <CalculatorButton label="3" />
      <CalculatorButton label="+" customClass="orange" />
      <CalculatorButton label="0" customClass="span-two" />
      <CalculatorButton label="." />
      <CalculatorButton label="=" customClass="orange" />
    </div>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
};

export default Calculator;
