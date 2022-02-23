import React from "react"
import useCounter from "./useCounter"

function CounterOne() {
  // const [count, setcount] = useState(0)

  // const increment = () => {
  //   setcount(count + 1)
  // }

  // const decrement = () => {
  //   setcount(count - 1)
  // }

  // const reset = () => {
  //   setcount(0)
  // }

  let [count, increment, decrement, reset] = useCounter(10, 20)

  return (
    <div>
      <p>CounterOne - {count}</p>
      <button onClick={() => increment(100)}>Increment</button>
      <button onClick={() => decrement(50)}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default CounterOne
