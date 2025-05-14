import { useState } from 'react'
import { tenureData } from './utils/constants';
import './App.css';
import TextInput from './components/TextInput';


function App() {
  const [downpayment, setDownpayment] = useState(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState(1000000);
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [processingFee, setProcessingFee] = useState(1);
  const [currentTenure, setCurrentTenure] = useState(12);

  const updateEMI = (e) => {
    setDownpayment(e.target.value);
  }

  const calculateEMI = (e) => {
    
  }

  return (
    <>
      <h2>EMI Calculator</h2>
      <TextInput state={cost} onChange={(e) => setCost(e.target.value)} id="cost" label="Total cost of Asset"/>

      <TextInput state={interest} onChange={(e) => setInterest(e.target.value)} id="interest" label="Interest rate (in %)"/>
      
      <TextInput state={processingFee} onChange={(e) => setProcessingFee(e.target.value)} id="processFee" label="Processing Fee (in %)"/>        
      

      <div>
        <label htmlFor="downpayment">
          Down Payment
        </label>
        <input type="range" id="downpayment" min='0' max='100' value={downpayment} onChange={updateEMI}/>
      </div>

      <div>
        <label htmlFor="totalLoanAmount">
          Loan per month
        </label>
        <p>Total loan Amount {totalLoanAmount}</p>
        <input type="range" id="totalLoanAmount" min='0' max='100' onChange={calculateEMI} value={downpayment}/>
      </div>

      <div>
        {tenureData.map(tenure => <button key={tenure} className={currentTenure === tenure ? 'active' : ''} onClick={() => setCurrentTenure(tenure)}>{tenure}</button>)}
      </div>
    </>
  )
}

export default App
