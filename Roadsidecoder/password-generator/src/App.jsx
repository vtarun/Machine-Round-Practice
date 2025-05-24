import { useState, useEffect } from 'react';

import './App.css';

import Checkbox from "./components/Checkbox"

function App() {
  const [codeLength, setCodeLength] = useState(4);
  const [generatedCode, setGeneratedCode] = useState('');
  const [checkboxList, setCheckboxList] = useState([
    {label: "Include Uppercase Letters", checked: false},
    {label: "Include Lowercase Letters", checked: false},
    {label: "Include numbers", checked: false},
    {label: "Include Symbols", checked: false}
  ]);

  useEffect(() => {
    generate();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
  }

  const generate = () => {
    setGeneratedCode('sa*^');
  }

  const handleCheckboxChange = (i) => {
    const updatedCheckboxList = [...checkboxList];
    updatedCheckboxList[i].checked = !updatedCheckboxList[i].checked;

    setCheckboxList(updatedCheckboxList);
  }

  const strength = codeLength > 14 ? 'Very Strong' : codeLength > 8 ? 'Medium' : "Poor";

  return (
    <>
      <div className="rows">
        <span>{generatedCode}</span>
        <button onClick={copyCode}>Copy</button>
      </div>
      <div className="container">
        <div className="rows">
          <span>Character Length</span>
          <span>{codeLength}</span>
        </div>
        <input type="range" min={4} max={20} value={codeLength} onChange={(e) => setCodeLength(e.target.value)}/>
      </div>
      <div className="checkboxes">
        {checkboxList.map((checkbox, index) => {
          return <Checkbox key={index} title={checkbox.label} state={checkbox.checked} onChange={() => handleCheckboxChange(index)} />
        })}        
      </div>
      <div className='rows'>
        <span>Strength:</span>
        <span>{strength}</span>
      </div>
      <button onClick={generate}>Generate Password</button>
    </>
  )
}

export default App
