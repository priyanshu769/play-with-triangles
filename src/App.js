import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // Check Triangle with three angles

  const [userInput, setInput] = useState(0);
  const [userInput2, setInput2] = useState(0);
  const [userInput3, setInput3] = useState(0);
  const [result, setResult] = useState("Try It Now.");

  const checkTriangle = () => {
    const sumOfAngles = userInput + userInput2 + userInput3;
    if (sumOfAngles === 180) {
      console.log("Sum of angles is 180");
      setResult("Congratulations! It's a triangle.");
    } else if (sumOfAngles !== 180) {
      console.log(
        "Sum of angles is " + sumOfAngles + " and it's not a triangle."
      );
      setResult("Oops! It's not a triangle.");
    }
  };

  // Tell the last angle
  const angle1 = Math.floor(Math.random() * 120);
  const angle2 = Math.floor(Math.random() * 90);
  const [angle3Result, setAngle3Result] = useState("");

  // Find the hypotenuse
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [hypotenuse, setHypotenuse] = useState("undefined currently");
  const findHypotenuse = () => {
    const hypo = Math.sqrt(side1 * side1 + side2 * side2);
    console.log(hypo);
    setHypotenuse(hypo);
  };

  return (
    <div className="App">
      <h1 className="heading">play with triangles</h1>
      {/* Do these three angles make a triangle. */}
      <div className="threeAngles container">
        <h2 className="title">Check if it's a triangle.</h2>
        <p className="desc">
          You put all the three angles and I tell if it's a triangle or not.
        </p>
        <p>
          <input
            onChange={(event) => {
              setInput(parseInt(event.target.value));
              console.log(parseInt(event.target.value));
            }}
            placeholder="Enter an angle"
          />
        </p>
        <p>
          <input
            onChange={(event2) => {
              setInput2(parseInt(event2.target.value));
              console.log(parseInt(event2.target.value));
            }}
            placeholder="Enter an angle"
          />
        </p>
        <p>
          <input
            onChange={(event3) => {
              setInput3(parseInt(event3.target.value));
              console.log(parseInt(event3.target.value));
            }}
            placeholder="Enter an angle"
          />
        </p>
        <p>
          <button onClick={checkTriangle}>Check</button>
        </p>
        <p className="result">{result}</p>
      </div>
      {/* Tell the third angle. */}
      <div className="thirdAngle container">
        <h2 className="title">What's the third angle?</h2>
        <p className="desc">
          Here are two angles and you tell this time, the third angle.
        </p>
        <p className="detail">
          Angle one is <span>{angle1}</span> and angle two is{" "}
          <span>{angle2}</span>. What should be the third angle to make a
          triangle.
        </p>
        <input
          onChange={(event) => {
            const totalOfangles =
              angle1 + angle2 + parseInt(event.target.value);
            if (totalOfangles === 180) {
              setAngle3Result("Correct! It's a triangle.");
            } else if (totalOfangles !== 180) {
              setAngle3Result("No it's not correct.");
            }
          }}
          placeholder="Enter third angle"
        />
        <p className="result">{angle3Result}</p>
      </div>
      {/* Find Hypotenuse Game */}
      <div className="findHypotenuse container">
        <h2 className="title">What's the hypotenuse?</h2>
        <p className="desc">
          You tell the two sides and I tell the hypotenuse.
        </p>
        <p>
          <input
            onChange={(event) => {
              setSide1(parseInt(event.target.value));
            }}
            placeholder="Length of side one"
          />
        </p>
        <p>
          <input
            onChange={(event) => {
              setSide2(parseInt(event.target.value));
            }}
            placeholder="Length of side two"
          />
        </p>
        <p>
          <button onClick={findHypotenuse}>Check</button>
        </p>
        <p className="result">The hypotenuse of the triange is {hypotenuse}.</p>
      </div>
      <footer>
        <h3>
          Made by <a href="https://devpriyanshu.netlify.app">Priyanshu</a>.
        </h3>
      </footer>
    </div>
  );
}
