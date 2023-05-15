import { useState, useRef } from 'react';
import { Toolbar } from './Toolbar/Toolbar';
import { Button } from './Button/Button';

import { PinInput } from './main';

const initialDigits = ['', '', '', ''];

export function ImperativeHandler() {
  const [digits, setDigits] = useState(initialDigits);
  const ref = useRef();

  const focus = () => {
    ref.current?.focus();
  };

  const clear = () => {
    setDigits(initialDigits);
  };

  const save = () =>{
    localStorage.setItem('pincode', digits);
    console.log(localStorage.getItem('pincode'));
    clear();

    alert('pin-code saved')
  }

  const check = ()=>{
    if(digits.toString() !== localStorage.getItem('pincode')){
      alert('Incorrect pin!')
    }
    else{alert('Welcome!')}
    clear()
  }

  return (
    <>
      <Toolbar>
        <PinInput ref={ref} digits={digits} onChange={setDigits} />
      </Toolbar>

      <Toolbar>
        <Button text="Focus" onClick={focus} />
        <Button text="Clear" onClick={clear} />
        <Button text="Create" onClick={save} />
        <Button text="Enter" onClick={check} />
      </Toolbar>
    </>
  );
}