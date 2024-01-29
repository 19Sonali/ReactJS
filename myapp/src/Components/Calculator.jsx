import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleAdd = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    alert(`Addition Result: ${result}`);
  };

  const handleSubtract = () => {
    const result = parseFloat(num1) - parseFloat(num2);
    alert(`Subtraction Result: ${result}`);
  };

  const handleMultiply = () => {
    const result = parseFloat(num1) * parseFloat(num2);
    alert(`Multiplication Result: ${result}`);
  };

  return (
    <div>
      <h1 style={{color:'white', backgroundColor: "red"}}>Calculator</h1>
      <input
      style={{margin:"20px"}} 
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
      style={{margin:"20px"}} 
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button style={{margin:"20px"}} onClick={handleAdd}>Add</button>
      <button style={{margin:"20px"}} onClick={handleSubtract}>Subtract</button>
      <button style={{margin:"20px"}} onClick={handleMultiply}>Multiply</button>
      <button style={{margin:"20px"}} >Divide</button>
    </div>
  );
};

export default Calculator;
