import { useState } from 'react';
import './App.css';
import Random from './Random';
import RewardList from './RewardList';

function App() {
  const [numberArr, setNumberArr] = useState([])

  const handleGetRewardNumber = (number) => {
    setNumberArr(prev => {return [...prev, number] })
  }
  return (
    <div className="container">
      <div className='app'>
        <Random getNumberReward={handleGetRewardNumber} listNumber={ numberArr}/>
        <RewardList listNumber={ numberArr}/>
      </div>
    </div>
  );
}

export default App;
