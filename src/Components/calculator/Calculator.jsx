import React from "react";
import "./Calculator.css";
import { btns, BTN_ACTIONS } from "./btnConfig";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator_result">
        <div className="calculator_result_exp"></div>
        <div className="calculator_result_exp"></div>
      </div>
      <div className="calculator_btns">
        {btns.map((item, index) => (
          <button key={index} className={item.class}>
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
