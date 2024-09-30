import React, { useState } from "react";

const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [bgColor, setBgColor] = useState("bg-gray-900"); 

  const incValue1 = () => setValue1((prev) => prev + 1);
  const decValue1 = () => setValue1((prev) => prev - 1);
  const incValue2 = () => setValue2((prev) => prev + 1);
  const decValue2 = () => setValue2((prev) => prev - 1);

  
  const updateResult = (newResult) => {
    setResult(newResult);
  };

  
  const Colour = () => {
    setBgColor((prevColor) => (prevColor === "bg-gray-900" ? "bg-blue-200" : "bg-gray-900"));
  };

  const add = () => updateResult(value1 + value2);
  const subtract = () => updateResult(value1 - value2);
  const multiply = () => updateResult(value1 * value2);
  const modulus = () => updateResult(value1 % value2);

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${bgColor}`}>
      <h1 className="text-4xl text-white font-bold mb-4">Calculator</h1>

      <div className="flex items-center mb-4">
        <h3 className="text-lg mr-4 text-white">Value: {value1}</h3>
        <button className="bg-green-500 text-white p-2 rounded mx-2" onClick={incValue1}>+</button>
        <button className="bg-green-500 text-white p-2 rounded mx-2" onClick={decValue1}>-</button>
      </div>

      <div className="flex items-center mb-4">
        <h3 className="text-lg mr-4 text-white">Value: {value2}</h3>
        <button className="bg-green-500 text-white p-2 rounded mx-2" onClick={incValue2}>+</button>
        <button className="bg-green-500 text-white p-2 rounded mx-2" onClick={decValue2}>-</button>
      </div>

      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 rounded mx-2" onClick={add}>+</button>
        <button className="bg-blue-500 text-white p-2 rounded mx-2" onClick={subtract}>-</button>
        <button className="bg-blue-500 text-white p-2 rounded mx-2" onClick={multiply}>*</button>
        <button className="bg-blue-500 text-white p-2 rounded mx-2" onClick={modulus}>%</button>
      </div>

    
      <button className="bg-yellow-100 p-2 rounded mx-2" onClick={Colour}>
       Background Colour
      </button>

      <h3 className="text-lg font-bold text-white mt-4">Result: {result}</h3>
    </div>
  );
};

export default App;
