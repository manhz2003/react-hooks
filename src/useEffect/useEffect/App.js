// useEffect
// cấu tạo gồm: 2 đối số (callback, dependence)
// Sử dụng useEffect khi gặp side effect.

// side effect là: khi sảy ra việc thay đổi dữ liệu bên cạnh việc render giao diện.
// ví dụ như khi: call API, thay đổi URL, xử lý các event, Thao tác với localStorage
// hoặc cookies, timers và intervals...

// có 3 trường hợp khi sử dụng useEffect.

// 1. useEffect(callback)
// -  gọi callback của useEffect mỗi khi component re-render.
// -  gọi callback của useEffect sau khi thêm element vào DOM.

// 2. useEffect(callback, [])
// -  chỉ gọi callback của useEffect 1 lần sau khi component mounted.

// 3. useEffect(callback, [deps])
// -  gọi callback của useEffect mỗi khi deps thay đổi.

// * Lý thuyết chung của 3 trường hợp.
//   + callback của useEffect được gọi lại mỗi khi component mounted.
//   + clearn upfunction luôn được gọi trước khi component unmount.
//   + clearn upfunction luôn được gọi trước khi callback được gọi.

import { useState } from "react";

import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {/* {show && <Content1 />} */}
      {/* {show && <Content2 />} */}
      {show && <Content2 />}
    </div>
  );
}

export default App;
