import { useState } from "react";
import Content from "./Content";
import Content2 from "./Content2";

// Khái niệm React.memo HOC
// + là một higher-order component (thành phần bậc cao).
// + dùng để tối ưu hóa hiệu suất, tránh việc re-render các component không cần thiết.
// + Khi một component được bao bọc bởi React.memo, nó kiểm tra các props truyền vào khi props thay đổi mới re-render.
// + Nếu các props không thay đổi, component sẽ sử dụng kết quả render trước đó và không thực hiện việc render lại.
// + khi có các component con không thay đổi theo props, và không muốn render lại chúng mỗi khi component cha re-render.

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>click me !</button>

      {/* khi 1 component được sử dụng bên trong 1 component khác nó là component con */}
      {/* 1 số trường hợp component con không cần re-render lại, ta sử dụng memo để ngăn chặn */}
      {/* nếu không sử dụng memo component con sẽ bị re-render theo component cha */}
      <Content />

      {/* component này được re-render vì nó có ít nhất 1 props thay đổi trở lên. */}
      <Content2 count={count} />
    </>
  );
}

export default App;
