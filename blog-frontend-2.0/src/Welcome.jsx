import { useState } from "react";


export function Welcome(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  }

  return (
    <div>
      <h2>Welcome {props.name}, to the Page!</h2>
      <button onClick={toggleActive}>Click Me</button>
      {isActive && <p>This text only showwhen isActive is true</p>}
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  )
}