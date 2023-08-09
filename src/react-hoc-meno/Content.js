import { memo } from "react";
// trường hợp không truyền truyền props vào cho component khi sử dụng memo

function Content({ count }) {
  return (
    <>
      <h1>xin chào ae ! {count}</h1>

      {/* component này không được re-render vì nó sử dụng memo để export ra. */}
      {console.log("re-render")}
    </>
  );
}

export default memo(Content);
