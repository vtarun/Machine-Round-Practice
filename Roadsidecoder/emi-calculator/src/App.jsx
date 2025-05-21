import { useCallback, useMemo, useState } from 'react'
import { tenureData } from './utils/constants';
import './App.css';
import TextInput from './components/TextInput';
import SliderInput from './components/SliderInput';


function App() {
  const [downpayment, setDownpayment] = useState(0);
  const [cost, setCost] = useState(5000000);
  const [interest, setInterest] = useState(10);
  const [processingFee, setProcessingFee] = useState(1);
  const [currentTenure, setCurrentTenure] = useState(12);
  const [emi, setEMI] = useState(0);

  const updateEMI = (e) => {
    const downpayment = ((emi - e.target.value)/emi)*100;
    setDownpayment(downpayment);
    setEMI(e.target.value);
  }

  const calculateEMI = (e) => {
    let tempDownpayment = downpayment;
    if (e) {
      tempDownpayment = Number(e.target.value);
    }
    const principle = cost - (cost * (tempDownpayment / 100));
    const monthlyInterest = interest / 12 / 100;
    const emi = (principle * monthlyInterest * Math.pow(1 + monthlyInterest, currentTenure)) /
                (Math.pow(1 + monthlyInterest, currentTenure) - 1);
  
    setDownpayment(tempDownpayment);
    setEMI(parseInt(emi));
    setCurrentEMI(parseInt(emi));
  }
  
  

  const updateTenure = (tenure) => {
    setCurrentTenure(tenure);
    calculateEMI();
  }

  const totalDownpayment = useMemo(() => {
    const principle = cost * (downpayment / 100);
    const fee = (cost - principle) * (processingFee / 100);
    return principle + fee;
  }, [cost, downpayment, processingFee]);

  return (
    <>
      <h2>EMI Calculator</h2>
      <TextInput state={cost} onChange={(e) => setCost(e.target.value)} id="cost" label="Total cost of Asset"/>

      <TextInput state={interest} onChange={(e) => setInterest(e.target.value)} id="interest" label="Interest rate (in %)"/>
      
      <TextInput state={processingFee} onChange={(e) => setProcessingFee(e.target.value)} id="processFee" label="Processing Fee (in %)"/>        
      
      <SliderInput id="downpayment" min='0' max='100' total={totalDownpayment} state={downpayment} label="Down Payment" onChange={calculateEMI} />

      <SliderInput id="totalLoanAmount" min='0' max={emi} total={emi} state={currentEMI} label="Loan per month" onChange={updateEMI} displayTotal="Total loan Amount"/>
      
      <div>
        {tenureData.map(tenure => <button key={tenure} className={currentTenure === tenure ? 'active' : ''} onClick={() => updateTenure(tenure)}>{tenure}</button>)}
      </div>
    </>
  )
}

export default App
