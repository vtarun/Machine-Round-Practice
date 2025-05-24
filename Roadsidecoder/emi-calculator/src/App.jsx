import { useCallback, useEffect, useMemo, useState } from 'react'
import { tenureData } from './utils/constants';
import './App.css';
import TextInput from './components/TextInput';
import SliderInput from './components/SliderInput';
import { numberWithCommas } from './utils/config'; 


function App() {
  const [downPayment, setDownPayment] = useState(0);
  const [cost, setCost] = useState(100);
  const [interest, setInterest] = useState(10);
  const [processingFee, setProcessingFee] = useState(1);
  const [tenure, setTenure] = useState(12);
  const [emi, setEMI] = useState(0);

  

  const calculateEMI = (dp) => {
    if(!cost) return;

    const loanAmount = cost - dp;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =  (loanAmount * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
                  ((1 + rateOfInterest) ** numOfYears - 1);
    
    return Number(EMI).toFixed(0);

  }

  const calculateDP = (emi) => {
    if(!cost) return;

    const downPaymentPercent = 100 - emi/(calculateEMI(0)) * 100;

    return Number((downPaymentPercent/100)*cost).toFixed(0);

  }

  useEffect(() => {
    if(!(cost > 0)){
      setEMI(0);
      setDownPayment(0);
    }

    const emi = calculateEMI(downPayment);
    setEMI(emi);

  },[cost, tenure, interest])
  
  

  const updateDownPayment = (e) => {
    if(!cost) return;

    const emi = parseInt(e.target.value);
    setEMI(emi);

    const dp = calculateDP(emi);
    setDownPayment(dp);
  }

  const updateEMI = (e) => {
    if(!cost) return;

    const dp = parseInt(e.target.value)
    setDownPayment(dp);

    const emi = calculateEMI(dp);
    setEMI(emi);
  }

  const totalDownpayment = () => {
    return numberWithCommas(Number((downPayment) + (cost - downPayment)*(processingFee/100)).toFixed(0));
  }

  const totalEMI = () => {
    return numberWithCommas(emi*tenure);
  }

  

  return (
    <>
      <h2>EMI Calculator</h2>
      <TextInput state={cost} setState={setCost} label="Total cost of Asset"/>

      <TextInput state={interest} setState={setInterest} label="Interest rate (in %)"/>
      
      <TextInput state={processingFee} setState={setProcessingFee} label="Processing Fee (in %)"/>        
      
      <SliderInput min={0} max={cost} showTotal={`Total Down Payment - ${totalDownpayment()}`} state={downPayment} label="Down Payment" onChange={updateEMI} labelMin={"0%"} labelMax={"100%"} />

      <SliderInput min={calculateEMI(cost)} max={calculateEMI(0)} showTotal={`Total loan Amount - ${totalEMI()}`} state={emi} label="Loan per month" onChange={updateDownPayment} />
      <div style={{marginTop: "20px"}}>
        <span className="label">Tenure</span>
        <div className='tenureContainer'>        
          {tenureData.map(t => <button key={t} className={`tenure ${t === tenure ? 'active' : ''}`} onClick={() => setTenure(t)}>{t}</button>)}
        </div>
      </div>
    </>
  )
}

export default App
