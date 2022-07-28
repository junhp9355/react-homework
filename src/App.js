import React, { useState } from 'react';
import Counter from './Components/Counter';
import Converter from './Components/Converter';
import Mybtn from './Components/Mybtn';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr />
      <Mybtn text={"1번"} borderRadius={"10px"} fontSize={"1rem"} isChecked={false} />
      <Mybtn text={"2번"} borderRadius={"30px"} fontSize={"2rem"} isChecked={false} />
      <Mybtn text={"3번"} borderRadius={"50px"} fontSize={"3rem"} isChecked={true} />
    </>
  );
};

export default App;