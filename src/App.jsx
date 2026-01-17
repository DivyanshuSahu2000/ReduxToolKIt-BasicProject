import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByNum, increment } from "./redux/slices/countSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(8);
  return (
    <div className="container">
      <h1></h1>
      {count}
      <div className="main ">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div className="inputsec">
        <button
          onClick={() => {
            dispatch(increaseByNum(Number(num)));
          }}
        >
          increase by {Number(num)}
        </button>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
