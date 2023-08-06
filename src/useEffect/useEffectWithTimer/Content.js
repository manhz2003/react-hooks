import { useState, useEffect } from "react";

// sử dụng setTimeOut và setInterval để làm đồng hồ đếm ngược thời gian.

function Content() {
  const [countDown, setCountDown] = useState(180);

  // nếu không sử dụng useEffect mỗi lần setCountDown thì component re-render lại
  // nên setInterval bị gọi lại 1 lần dẫn tới lỗi lặp nhiều lần.

  // khi sử dụng useEffect với đối số thứ 2 là [] callback chỉ gọi lại 1 lần nên
  // setInterval chỉ bị gọi 1 lần tránh lặp lại.

  useEffect(() => {
    // setInterval sẽ lặp lại và giảm dần sau 1 giây.
    // nếu sử dụng setInterval thì thêm countDown ở deps.

    // const timerId = setInterval(() => {
    //   setCountDown((prevCountDown) => prevCountDown - 1);
    // }, 1000);

    // // sau khi unmount cần phải clear clearInterval để tránh rò rỉ bộ nhớ.
    // return () => {
    //   clearInterval(timerId);
    // };

    // setTimeOut chỉ lặp duy nhất 1 lần sau 1 giây.
    // sử dụng countDown làm deps, khi countDown - 1 => deps thay đổi, nên
    // callback sẽ được gọi lại => setCountDown cũng sẽ được gọi lại.
    const timerId = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);

    // sau khi unmount cần phải clear clearInterval để tránh rò rỉ bộ nhớ.
    return () => {
      clearTimeout(timerId);
    };

    // nếu sử dụng setInterval thì bỏ countDown ở deps đi.
  }, [countDown]);

  return (
    <>
      <h1>{countDown}</h1>
    </>
  );
}

export default Content;
