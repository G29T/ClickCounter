import logo from './logo.svg';
import './App.css';
import Button from './components/button.component';
import { useState } from "react";

function App() {

  const [totalSum, setTotalSum] = useState(0);

  const updateTotalSum = (value) => {
    setTotalSum(totalSum + value);
  }

  return (
    <div className="App">
      <Button id="1" updateTotal={updateTotalSum} />
      <Button id="2" updateTotal={updateTotalSum} />
      <Button id="3" updateTotal={updateTotalSum} />
      <span style={{ display: 'inline-block', marginTop: '20px' }}>Total: {totalSum}</span>
    </div>
  );
}

export default App;
