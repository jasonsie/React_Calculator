import "./calculator.css";
import { useState } from "react";

export default function Calculator() {
    const [sum, setSum] = useState("");
    var [sec, setSec] = useState("");
    var [cal, setCal] = useState("");
    var [show, setShow] = useState(true);
    var [equal, setEqual] = useState(true)

    const op = ["+", "-", "*", "/", "%"];

    const clickHandler = (e) => {
        const keyVal = e.target.innerText;
        const num = parseInt(e.target.innerText);

        // is num 
        if (!isNaN(num) && !op.includes(cal)) {
            // using parsent to elimiting input 00000000.....
            setSum(parseInt(sum + e.target.innerText).toString());

        // is num and we do have press the cal sign
        } else if (!isNaN(num) && op.includes(cal)) {
            setSec(parseInt(sec + e.target.innerText).toString());
        
        // not num and is sign and sum is not zero
        } else if (isNaN(num) && op.includes(keyVal) && sum !== "") {
            setCal((cal = e.target.innerText));
            setShow(false);

        // pressing =
        } else if (keyVal === "=" && equal) {
            setSum(eval(sum + cal + sec));
            setShow(true);
            setEqual(false)

        // reset, AC
         } else {
            setSum("");
            setSec("");
            setCal("");
            setShow(true);
            setEqual(true)
        }
    };

    return (
        <>
            <div className="calCon">
                <div className="sumCon">
                    <div className="cal">{cal}</div>
                    <div className="sum">{show ? [sum] : [sec]}</div>
                </div>
                <ul
                    className="keyCon"
                    onClick={(e) => {
                        clickHandler(e);
                    }}
                >
                    <li className="key">AC</li>
                    <li className="key">&plusmn;</li>
                    <li className="key">%</li>
                    <li className="key-right">/</li>
                    <li className="key">7</li>
                    <li className="key">8</li>
                    <li className="key">9</li>
                    <li className="key-right">*</li>
                    <li className="key">4</li>
                    <li className="key">5</li>
                    <li className="key">6</li>
                    <li className="key-right">-</li>
                    <li className="key">1</li>
                    <li className="key">2</li>
                    <li className="key">3</li>
                    <li className="key-right">+</li>
                    <li className="zero key">0</li>
                    <li className="equl key-right">=</li>
                </ul>
            </div>
        </>
    );
}
