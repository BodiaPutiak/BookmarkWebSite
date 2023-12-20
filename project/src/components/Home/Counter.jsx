import React, { useEffect, useState } from 'react';

const NumberCounter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const targetNumber = 35000;
    let currentNumber = 0;

    const interval = setInterval(() => {
      currentNumber += Math.ceil((targetNumber - currentNumber) / 10);
      setNumber(currentNumber);

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const formattedNumber = number.toLocaleString();

  const digitArray = formattedNumber.split('').map((digit, index) => (
    <div key={index} className="digit">
      {digit === ',' ? <div className="comma">,</div> : digit}
    </div>
  ));

  return (
    <div className="number-rolling-container">
      <div className="number-rolling">
        {digitArray}+
      </div>
      <h4>ALREADY JOINED</h4>
    </div>
  );
};

export default NumberCounter;



