import { useState, useCallback } from "react";
import Content from "./Content";

// khái niệm useCallback
// + được sử dụng để tối ưu hóa hiệu suất của việc render lại các component.
// + tránh việc tạo ra các hàm mới mỗi khi component re-render.
// + đặc biệt là trong các trường hợp sử dụng các hàm như là props cho các component con.
// + useCallback() nhận vào 2 đối số là 1 callback và 1 mảng [].
// + khi sử dụng callback và truyền 1 [] rỗng thì callback trả về tham chiếu cũ tránh việc re-render
// + khi sử dụng callback và truyền [] có chứa deps thì mỗi lần deps thay đổi nó sẽ trả về 1 tham chiếu mới của hàm.

// * lưu ý khi sử dụng useCallback phải sử dụng memo, vì memo có tác dụng ngăn chặn component con rerender.

// thực hiện ấn vào nút thì tăng dần, button được viết bên file Content, và hiển thị kết quả tăng bên file App.
function App() {
  const [count, setCount] = useState(0);

  // khi chạy component, hàm handleIncrease sẽ truyền tham chiếu của nó vào props của component Content
  // khi component re-render hàm handleIncrease sẽ truyền 1 tham chiếu mới khác dẫn đến việc Content bị re-render
  // mặc dù Content có sử dụng memo để ngăn chặn việc đó, vì vậy cần dùng useCallback để nó chỉ trả về cùng 1 tham chiếu.
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      {/* tạo 1 props và truyền hàm handleIncrease vào tham số của hàm content sử dụng  */}
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </>
  );
}

export default App;
