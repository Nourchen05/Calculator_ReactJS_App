import React, { useRef, useEffect } from "react";
import "./Calculator.css";
import { btns, BTN_ACTIONS } from "./btnConfig";

const Calculator = () => {
  const btnsRef = useRef(null);
  const expRef = useRef(null);
  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);
  const btnClick = (item) => {
    console.log(item);
    const exDiv = expRef.current;
    if (item.action === BTN_ACTIONS.THEME)
      document.body.classList.toggle("dark");
  };
  return (
    <div className="calculator">
      <div className="calculator_result">
        <div ref={expRef} className="calculator_result_exp">
          9999
        </div>
        <div className="calculator_result_exp"></div>
      </div>
      <div ref={btnsRef} className="calculator_btns">
        {btns.map((item, index) => (
          <button
            key={index}
            className={item.class}
            onClick={() => btnClick(item)}
          >
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
