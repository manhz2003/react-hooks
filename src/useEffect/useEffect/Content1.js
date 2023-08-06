import { useEffect, useState } from "react";

// ví dụ dùng useEffect để cập nhật tiêu đề.

// 1. useEffect(callback)
// -  gọi callback của useEffect mỗi khi component re-render.
// -  gọi callback của useEffect sau khi thêm element vào DOM.

function Content1() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // update lại DOM, sửa tiêu đề của trang.
    document.title = title;
    console.log("re-render", title);
  });

  // nếu viết ở ngoài vẫn được kết quả tương tự vì được setState sau đó gán vào document.title
  // nhưng không nên viết ở ngoài useEffect vì không đúng quy ước vì nó thuộc side effect
  // khi gặp logic phức tạp có thể gây ra chặn việc render giao diện vì code thực hiện đồng bộ.
  // cần ưu tiên luồng chính là luồng giao diện trước. useEffect thực hiện side Effect, nó sẽ gọi callback sau khi render giao diện.

  // document.title = title;

  return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
}

export default Content1;
