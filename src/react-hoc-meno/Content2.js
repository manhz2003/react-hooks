import { memo } from "react";

// trường hợp truyền props vào cho component khi sử dụng memo
function Content2({ count }) {
  return (
    <>
      <h1>giá trị của count: {count}</h1>
      {/* component này được re-render vì nó sử dụng props và props này thay đổi. */}
      {console.log("re-render")}
    </>
  );
}

export default memo(Content2);
