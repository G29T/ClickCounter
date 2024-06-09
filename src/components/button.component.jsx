import { useState } from "react";
import './button.styles.scss';

const Button = ({id, updateTotal}) => {
    const [total, setTotal] = useState(0);

    const incrementOperation = () => {
      setTotal(total+1);
      updateTotal(1);
    }
  
    const decrementOperation = () => {
      setTotal(total-1);
      updateTotal(-1);
    }
  
  
    return (
      <div className="button-container" key={id}>
        <button className="button-decrement" onClick={decrementOperation}>-</button>
        <button className="button-increment" onClick={incrementOperation}>+</button>
        <span style={{ display: 'inline-block', minWidth: '30px' }}>{total}</span>
      </div>
    );
}

export default Button;