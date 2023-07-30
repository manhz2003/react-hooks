// mounted và unouted (gắn vào và gỡ ra)

// mounted: là thời điểm đưa component vào sử dụng

// unmouted: là thời điểm gỡ component ra

import Content from "./Content";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    // khi đưa Content là 1 component vào thì gọi là mounted.
    // khi ấn vào button mà ẩn đi thì gọi là unmouted.
    <div>
      <button onClick={() => setShow(!show)}>togle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
