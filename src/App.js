import Button from "./components/Button/Button.js";
import Watch from "./components/Watch/Watch.js";
import { useState, useEffect } from "react";
import Container from "./components/container/Container.js";
function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState([]);
  const start = () => {
    if(!timer){
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue +1)
      }, 1))
    }
  }
  const stop = () => {
    clearInterval(timer);
    setTimer();
  }
  const reset = () =>{
    setTime(0);
  }
  return (
    <Container>
      <Watch time={time}/>
      <div>
        <Button action={start}>start</Button>
        <Button action={stop}>stop</Button>
        <Button action={reset}>reset</Button>
      </div>
    </Container>
  );
}

export default App;
