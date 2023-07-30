import {useState} from 'react'

// Ôn tập useState.

// thực hành: cho 1 mảng các phần thưởng khi bấm vào nút lấy thưởng.
// sẽ hiện ra 1 phần thưởng ngẫu nhiên bất kì.

// cách để random gift này cho random nhân với độ dài của mảng: Math.floor(Math.random())
// floor để làm tròn vì index của mảng là số nguyên.
const gifts = [
  'CPU i9',
  'Ram 32 gb',
  'LGB keyboard'
]

function App() {
  const [gift, setGift] = useState()

  const randomGift = () =>{
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])

  }

  return (
    <div className="App" style = {{padding: 20}}>
      <h1>{gift || 'chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
