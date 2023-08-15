import { useState, useReducer } from "react";

// Khái niệm useReducer:
// cung cấp một cách thức giải quyết tương tự useState,
// nhưng chủ yếu được sử dụng trong các tình huống phức tạp hơn,
// đặc biệt là khi cần quản lý trạng thái có cấu trúc phức tạp hoặc có nhiều trạng thái cùng lúc.
// ví dụ: cần nhiều useState để gỉai quyết hoặc truyền vào nó array, object lồng nhau ...

// ví dụ bài toán: có 2 nút, tăng và giảm 1 số, bắt đầu từ 0.

// cấu tạo các bước thực hiện
// useState
// 1. init state = 0
// 2. Actions: up(state + 1) / down (state -1)

// useReducer
// 1. init state = 0
// 2. Actions: up(state + 1) / down (state -1)
// 3. reducer (Reducer là một hàm xử lý các hành động và trạng thái hiện tại để tính toán ra trạng thái mới. )
// 4. dispatch (dispatch để gửi hành động và cập nhật trạng thái.)

// ví dụ khi sử dụng useState()
function App2() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>
    </>
  );
}

// ví dụ khi sử dụng useReduce()

// init state
const initState = 0;

// action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// reducer là 1 hàm nhận vào 2 tham số là state, action
const reducer = (state, action) => {
  // hàm reducer chỉ được gọi khi dispatch thực hiện action
  console.log("running ...");

  // sử dụng switch case vì trong tương lai có thể sẽ có thêm các action khác.
  switch (action) {
    case UP_ACTION:
      // giá trị khởi tạo của nó là gì thì phải return đúng kiểu dữ liệu của nó.
      return state + 1;

    case DOWN_ACTION:
      return state - 1;

    // nếu không có có action nào được chọn thì mặc định ném ra 1 lỗi.
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  // useReducer nhận vào 2 đối số là hàm reducer xử lý các hành động, và initState giá trị khởi tạo.
  // dispatch là 1 hàm dùng để kích hoạt action.
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
    </>
  );
}

export default App;
