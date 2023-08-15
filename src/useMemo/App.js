import { useState, useMemo, useRef } from "react";

// khái niệm useMemo
// được dùng để tối ưu hiệu năng, tránh việc bị lặp lại các logic không cần thiết.
// ví dụ như việc tính toán có thể khi re-render không cần phải tính toán lại thì sử dụng useMemo.

// useMemo cấu tạo gồm 2 đối số là 1 callback và 1 deps.
// khi truyền deps là 1 mảng [] rỗng thì callback được gọi lại 1 lần.
// khi truyền deps vào mảng [deps] thì callback sẽ được gọi lại khi deps thay đổi.
// ngăn chặn việc tính toán lại mỗi khi component re-render và chỉ tính toán lại khi các dependency thay đổi.
// đặc biệt khi sử lý tính toán phức tạp hoặc thuật toán, phải kiểm soát việc render nếu không sẽ ảnh hưởng hiệu năng.

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  // vận dụng useRef làm tính năng tự động focus input.
  const nameRef = useRef();
  // khi không sử dụng useMemo mỗi lần nhập text vào input, nó gọi sự kiện onChange nên component
  // bị re-render dẫn đến hàm handleSubmit bị tính toán lại, gây vấn đề về hiệu suất.
  // ta chỉ cần tính toán lại dựa vào product được thêm, sửa, xoá thôi.
  const handleSubmit = () => {
    setProduct([
      ...product,
      {
        name,
        // ép kiểu sang số vì mặc định dữ liệu nhập vào từ input là string.
        price: parseInt(price),
      },
    ]);
    setName("");
    setPrice("");

    // đặt tự động focus cho input.
    nameRef.current.focus();
  };

  // hàm này sẽ bị gọi lại mỗi khi component re-render dẫn đến việc tính toán lặp lại k cần thiết
  //   const total = product.reduce((result, product) => {
  //     console.log("tính toán lại ...");
  //     return result + product.price;
  //   }, 0);

  // sử dụng useMeno.
  const total = useMemo(() => {
    const result = product.reduce((result, product) => {
      return result + product.price;
    }, 0);

    // hàm này chỉ được gọi mỗi khi thêm sửa xoá product, còn các lần re-render không liên quan thì không gọi hàm này.
    console.log("tính toán lại ...");
    return result;

    // truyền đối số thứ 2 của useMeno là deps thì callback được gọi lại mỗi khi deps thay đổi.
    // nếu truyền rỗng thì callback chỉ được gọi lại 1 lần.
  }, [product]);

  return (
    <>
      <input
        ref={nameRef}
        type="text"
        value={name}
        placeholder="enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>add</button>
      <br />
      total: {total}
      <ul>
        {product.map((product, index) => {
          return (
            <>
              <li key={index}>
                {product.name} - {product.price}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
