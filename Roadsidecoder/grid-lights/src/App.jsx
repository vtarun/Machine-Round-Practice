import { useState } from 'react';
import './App.css'

function Cell({filled, onClick, isDisabled}) {
  return <button className={`cell ${filled ? ' activate': ''}`} onClick={onClick} disabled={isDisabled}></button>
}

function App() {

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ];
  const [activatedCells, setActivatedCells] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  function activateCell(index){
    const newActivatedCells = [...activatedCells, index];
    setActivatedCells(newActivatedCells);

    if(newActivatedCells.length === config.flat(1).filter(Boolean).length){
      deactivateGrid();
    }
    
  }

  function deactivateGrid(){
    setIsDeactivating(true);
    const interval = setInterval(()=> {
      setActivatedCells(prev => {
        const currentActivatedCells = [...prev];
        currentActivatedCells.pop();
        if(currentActivatedCells.length === 0){          
          clearInterval(interval);
          setIsDeactivating(false);
        }
        return currentActivatedCells;
      });
      
    }, 1000);
  }

  return (
    <div className='container'>
      <div className="wrapper">
        {config.flat(1).map((cell, index) => 
          (cell ? <Cell 
                    key={index} 
                    filled={activatedCells.includes(index)} 
                    onClick={() => activateCell(index)} 
                    isDisabled={activatedCells.includes(index) || isDeactivating} 
                  /> : <span key={index}/>)
        )}
        
      </div>
      
    </div>
  )
}

export default App
