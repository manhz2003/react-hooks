import { useState, useEffect, useLayoutEffect } from "react";

// Khái niệm:
// useLayoutEffect có điểm tương đồng với useEffect là đều sử dụng trong trường hợp gặp side effect nhưng ít sử dụng
// hơn chỉ áp dụng cho 1 số tình huống cụ thể useLayoutEffect, có thể ảnh hưởng đến hiệu suất và trải nghiệm người dùng.

// Khác nhau
// useEffect được gọi sau khi component đã được render và DOM đã được cập nhật.
// useLayoutEffect được gọi trước khi component đã được render và DOM đã được cập nhật.

// ví dụ chức năng đếm số, nhưng chỉ cho đếm đến 3 thì quay lại đếm từ 0.
function Content() {
  const [count, setCount] = useState(0);

  // sử dụng useEffect

  // trường hợp sử dụng useEffect
  // Khi biến count là 3 + 1 = 4 thì callback chưa được gọi ngay mà html được đưa vào DOM trước nên vẫn bị hiện số 4 hiện ra song mất đi
  // nhưng tốc đổ xử lý nhanh không nhìn thấy được số 4, khi làm tác vụ lớn hơn sẽ nhìn thấy giao diện hiển thị ra song biến mất.
  // sau khi html được thêm vào DOM thì callback được gọi nên nó sẽ check điều kiện và setCount về 0.

  // vì useEffect được gọi sau khi component render vào DOM.
  //   useEffect(() => {
  //     if (count > 3) {
  //       setCount(0);
  //     }
  //   }, [count]);

  // sử dụng useLayoutEffect
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleRun}>run</button>
    </>
  );
}

export default Content;
