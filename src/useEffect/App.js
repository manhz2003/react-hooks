// useEffect ví dụ bên file content
// có 3 trường hợp sử dụng useEffect nên ta tạo 3 file Content cho 3 trường hợp.

import { useEffect, useState } from "react";

import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {/* trường hợp 1 useEffect(callback)*/}
      {/* {show && <Content1 />} */}
      {/* {show && <Content2 />} */}
      {show && <Content3 />}
    </div>
  );
}

export default App;
