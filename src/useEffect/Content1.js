// khái niệm: useEffect

// để học useEffect cần nắm được những kiến thức sau:
// event: add/ remove event listener
// Observer pattern subscribe/ unsubscribe
// timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// mounted, unmounted
// call api

// sử dụng khi muốn thực hiện các side Effect
// side Effect: là khi có 1 tác động sảy ra làm thay đổi về dữ liệu
// ví dụ:
// 1: update DOM (F8 blog title...)
// 2: Call API
// 3: listen dom event (Scroll, resize)
// 4: cleannup (remove listener/ unsubscribe, cleartime)

// cách sử dụng và hoạt động của useEffect
// nhận vào 2 đối số:
// + callback (bắt buộc)
// + deps: sự phụ thuộc về dữ liệu (không bắt buộc)

// các trường hợp

// useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi thêm element vào DOM

// useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mounted.

// useEffect(callback, [deps])

// Lý thuyết chung
// 1. callback luôn được gọi sau khi component mounted.

import { useEffect, useState } from "react";

// trường hợp 1 useEffect(callback)
// ví dụ dùng useEffect để cập nhật tiêu đề

function Content1() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // update lại DOM, sửa tiêu đề của trang.
    document.title = title;
    console.log("re-render", title);
  });

  // nếu viết ở ngoài vẫn được kết quả tương tự vì được setState sau đó gán vào document.title
  // nhưng không nên viết ở ngoài useEffect vì không đúng quy ước, và nó được đọc trước khi render giao diện
  // có thể gây ra sai hoặc chậm, bỏ vào useEffect để thực hiện bất đồng bộ nó sẽ được gọi sau khi giao diện được render ra
  // cần ưu tiên luồng chính là luồng giao diện trước. useEffect thực hiện side Effect.

  // document.title = title;

  return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
}

export default Content1;
