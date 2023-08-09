import { useEffect, useRef, useState } from "react";

// thực hành app đếm ngược thời gian, ấn vào start bắt đầu đếm, ấn stop thì dừng lại.
function AppTest() {
  const [count, setCount] = useState(60);
  let timerId;

  const handleStart = () => {
    timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    // in ra giá trị của setInterval được gán vào biến timerId.
    console.log("start -> " + timerId);
  };

  const handleStop = () => {
    // mỗi lần setCount cho biến count component sẽ được re-render, ví dụ từ 60-59 là nó đã render lại
    // nên khi log timerId ra nó sẽ là undefined vì biến timerId tại vì ta gọi hàm handleStop luôn nên dòng số 6 chưa được gán id vào.
    // nếu gọi hàm handleStop trước khi giá trị nó giảm xuống thì component chưa kịp re-render lại nên biến timerId sẽ chứa giá trị của
    // hàm handleStart gán setInterval vào.

    // nếu ta clearInterval ngay sau khi bấm handleStart thì mới dừng được vì khi nó chuyển giá trị khác thì component đã re-render.
    clearInterval(timerId);

    // trả về undefined vì timerId đã thay đổi và nó không tìm thấy timerId cũ.
    console.log("stop -> " + timerId);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

// useRef nhận vào 1 đối số là giá trị khởi tạo
// useRef trả về 1 object có key mặc định là current dùng để chứa giá trị nhận vào.
// useRef là khi giá trị được gán vào bị thay đổi thì component cũng không bị re-render.
// Lưu các giá trị qua một tham chiếu bên ngoài function component.

// sử dụng useRef
function App() {
  const [count, setCount] = useState(60);

  // useRef trả về 1 object có key là current ta có thể sử dụng key này để tham chiếu đến giá trị được gán vào.
  const timerId = useRef();

  //
  const prevTimer = useRef();

  useEffect(() => {
    prevTimer.current = count;
  }, [count]);

  // lấy ra element được truyền props ref.
  const h1Ref = useRef();
  useEffect(() => {
    console.log(h1Ref);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log("start -> " + timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop -> " + timerId.current);
  };

  // lấy ra giá trị hiện tại và giá trị trước đó của count.
  console.log(count, prevTimer.current);
  return (
    <>
      {/* trong jsx có hỗ trợ props ref dùng để lấy ra element đó */}
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

export default App;
