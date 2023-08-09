import { memo } from "react";

function Content({ onIncrease }) {
  return (
    <>
      <h1>hello ae !</h1>
      <button onClick={onIncrease}>click me !</button>

      {/* mặc dù truyền props không thay đổi nhưng khi hàm app chạy lại thì onIncrease là 1 tham chiếu mới nên nó
          đã thay đổi, dẫn đến content bị render lại k cần thiết mặc dù sử dụng meno, trường hợp này dùng useCallback*/}
      {console.log("re-render")}
    </>
  );
}

export default memo(Content);
