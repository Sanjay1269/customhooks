import React, { useState } from "react"

function useCounter(initialValue, val) {
  const [count, setcount] = useState(initialValue)

  const increment = (value) => {
    if (!NaN) {
      setcount(count + val + value)
    } else {
      setcount(count + val)
    }
  }

  const decrement = (value) => {
    if (!NaN) {
      setcount(count - val - value)
    } else {
      setcount(count - val)
    }
  }

  const reset = () => {
    setcount(initialValue)
  }
  return [count, increment, decrement, reset]
}

export default useCounter
