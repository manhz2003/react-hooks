
import { useState} from 'react'
// Khái niệm hooks useState 
// + trạng thái của dữ liệu, thay đổi từ giá trị nọ sang giá trị kia.
// + Khi dữ liệu thay đổi thì giao diện tự động render lại.
// + ví dụ: từ 1 -> 2, từ a -> b ...
// + để sử dụng được cần import hooks đó từ react.
// + hooks chỉ sử dụng với function component.

// nguyên lý hoạt động useState
// const [state, setState] = useState(initState)
// useState trả về 1 mảng gồm: initState(giá trị hiện tại), setState là 1 function để thay đổi giá trị state.

// ví dụ làm 1 chức năng bấm vào nút thì số được tăng dần từ 1.

function App1() {

  // gán giá trị lần lượt của useState vào Destructuring.
  // Destructuring khác array và object ở chỗ là nó không có tên.
  const [counter, setCounter] = useState(1)

  const handleIncrease = () =>{
    // tham số của setCounter đang truyền là number, ta có thể truyền giá trị khác, kể cả callback.
    // React sẽ gom nhóm các lần gọi này và chỉ thực hiện một lần cập nhật state cuối cùng.
    // các hàm trong React không thay đổi giá trị state ngay lập tức.
    // việc cập nhật giá trị state thực sự sẽ xảy ra sau khi component được render 
    // chúng được gom nhóm và xử lý bất đồng bộ (asynchronously) bởi React.
    // Điều này là để tối ưu hiệu suất và tránh việc render lại không cần thiết.

    setCounter(counter + 1)

    // setCounter(counter + 1)
    // setCounter(counter + 1)
  }

  return (
    <div className="App">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

// setState với callback.
// sử lý vấn đề gọi nhiều lần bằng cách sử dụng setState với callback.
function App2 (){
  const [counter, setCounter] = useState(1)

  const handleIncrease = () =>{
    // setCounter nhận vào 1 callback có tham số prevState là giá trị của state trước khi setState cập nhật.
    // với cách này setCounter sẽ được thực hiện lần lượt 3 lần cùng 1 lúc.
    setCounter((prevState) => prevState + 1)
    setCounter((prevState) => prevState + 1)
    setCounter((prevState) => prevState + 1)

  }

  return <div className="App">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
    
  </div>
}

// state với callback. ví dụ tính tổng 1 đơn hàng và đặt nó làm state
function App3 (){
  const orders = [100, 200, 300]
  
  // useState nhận vào 1 callback, callback này sẽ return về state
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce ((total, cur) => total + cur)
    return total
  })

  const handleIncrease = () =>{
    setCounter((prevState) => prevState + 1)
  }

  return <div className="App">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>   
  </div>
}

function App () {
  const [info, setInfo] = useState({
    name: 'Nguyen The Manh',
    age: 20,
    address: 'Ha Noi, VN'
  })

  
  const handleUpdate = () => {
    // hàm setInfo sẽ thay thế thông tin của info.
    setInfo ({
      // muốn giữ lại info thì áp dụng toán tử rải.
      // ...info,
      bio: 'yêu màu hồng '
    })
  }

  return <div className="App">
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>update</button>   
  </div>
}

export default App;

// Lưu ý:
//  - Component được re-render sau khi `setState`.
//  - Initial state chỉ dùng cho lần đầu.
//  - setState với callback.
//  - state với callback.
//  - set state là thay thế state bằng giá trị mới.
