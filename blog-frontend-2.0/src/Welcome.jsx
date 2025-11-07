import { useState } from "react";

export function Welcome(props) {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const toggleActive = () => {
    setIsActive(!isActive);
  }
  
  const increment = () => {
    console.log(count);
    setCount(count + 1)
  }

  return (
    <div>
      <div>
      <h2>Welcome {props.name}, to the Page!</h2>
      <button onClick={toggleActive}>Click Me</button>
      {isActive && <p>This text only show when isActive is true</p>}
      <p>{isActive ? "Active" : "Inactive"}</p>
      </div>

      <div>
      <p>You Clicked the button {count} times...</p>
      <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}