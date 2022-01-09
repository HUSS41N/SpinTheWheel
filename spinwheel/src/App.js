import wheel from "./wheel.svg";
import roundObject from "./roundObject.png";
import "./style.css";
import React ,{ useRef, useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';

// - Please code this in React.
// - Make the screen as per design (Spin the Wheel) - it does not need to be exact - but close enough is okay
// - Make the object spin when the button is clicked. It would be good to do an image rotate.
// - Make the object stop Spinning after 1-10 seconds (use  1+ Math.random() *10 for setInterval)
// - display the angle of the spin stop in the console.log output

const App = () => {

  let [rotate,setRotate] = useState("")
  let angleObj = useRef(null)

  let spinTheWheel = () => {
    setRotate("rotate")
    console.log(angleObj.current)
    let t =  1+ Math.random() *10;
    setTimeout(()=>{
      let st = window.getComputedStyle(angleObj.current,null)
      var tm = st.getPropertyValue("-webkit-transform") ||
           st.getPropertyValue("-moz-transform") ||
           st.getPropertyValue("-ms-transform") ||
           st.getPropertyValue("-o-transform") ||
           st.getPropertyValue("transform") ||
           "none";
           if (tm != "none") {
            let values = tm.split('(')[1].split(')')[0].split(',');
            //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
            let angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
            console.log(angle + " Deg")//adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
          }
      setRotate("rotate stop-rotate")
    },t*1000)
  };

  return (
    <Container>
      {/* <img src={roundObject} className={spining ? "rotate" : "stop-rotate"}></img> */}
      <img src={roundObject} className={rotate} ref={angleObj}  ></img>
      <SpinButton onClick={spinTheWheel}>SPIN</SpinButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SpinButton = styled.button`
  padding: 1.5rem 3rem;
`;
export default App;
