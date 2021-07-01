// Hello.fixture.jsx
import React, { useState } from "react";
import Item from "./Item";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div onClick={() => setCount((prev) => prev + 1)}>+</div>
      <Item name={count} />
    </div>
  );
}
