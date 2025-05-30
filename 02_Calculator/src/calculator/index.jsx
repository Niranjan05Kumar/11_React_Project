import React, { useState } from 'react'
import './style.css'

const index = () => {
    const [data, setData] = useState("");

    const getValue = (event)=> {
        setData(data.concat(event.target.value));
        // OR
        // setData(data + event.target.value);
    }

    const allClear = () => {
        setData("");
    }

    const back = () => {
        setData(data.slice(0, -1));
    }

    const calculation = () => {
        try {
            setData(eval(data).toString());
        } catch (error) {
            setData("Error");
        }
    }

  return (
    <div>
      <div class="container">

        <h2>Welcome To My Calculator</h2>

        <div class="calculator">
            <input placeholder="00" className='display' value={data}/>
            <div class="buttons">
                <button onClick={allClear} >AC</button>
                <button onClick={back} >DEL</button>
                <button onClick={getValue} value="%" >%</button>
                <button onClick={getValue} value="/" >/</button>
                <button onClick={getValue} value="7" >7</button>
                <button onClick={getValue} value="8" >8</button>
                <button onClick={getValue} value="9" >9</button>
                <button onClick={getValue} value="*" >*</button>
                <button onClick={getValue} value="4" >4</button>
                <button onClick={getValue} value="5" >5</button>
                <button onClick={getValue} value="6" >6</button>
                <button onClick={getValue} value="-" >-</button>
                <button onClick={getValue} value="1" >1</button>
                <button onClick={getValue} value="2" >2</button>
                <button onClick={getValue} value="3" >3</button>
                <button onClick={getValue} value="+" >+</button>
                <button onClick={getValue} value="0" >0</button>
                <button onClick={getValue} value="." >.</button>
                <button onClick={calculation} >=</button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default index
