import React, { useEffect, useState } from 'react';

import './App.css';
import Container from './components/Container/Container';
import { allSounds } from './utilities/allSounds';

export default function App() {
  const [keyPress, setKeyPress] = useState('');
  const [errorMess, setErrMess] = useState('');

  const setKeyPressHandler = (value) => {
    setKeyPress(value)
  }

  const pressBtnHandler = (e) => {
    const { keyCode, key } = e;
    setKeyPress(key.toUpperCase());
    const doc = (src) => document.querySelector(`#${src}`).play();

    switch (keyCode) {
      case 81:
        doc(allSounds[0].key);
        break;
      case 87:
        doc(allSounds[1].key);
        break;
      case 69:
        doc(allSounds[2].key);
        break;
      case 65:
        doc(allSounds[3].key);
        break;
      case 83:
        doc(allSounds[4].key);
        break;
      case 68:
        doc(allSounds[5].key);
        break;
      case 90:
        doc(allSounds[6].key);
        break;
      case 88:
        doc(allSounds[7].key);
        break;
      case 67:
        doc(allSounds[8].key);
        break;
      default:
        setErrMess(`${key.toUpperCase()} is not supported`);
        setTimeout(() => {
          setErrMess('');
        }, 2500);
        return;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', pressBtnHandler);
  })

  return (
    <div className="App">
      <Container keyPress={keyPress} setKeyPressHandler={setKeyPressHandler}
        errorMess={errorMess} />
    </div>
  );
}