import { useEffect, useState } from "react";

// call API hiển thị title của post.

// 2. useEffect(callback, [])
// -  chỉ gọi callback của useEffect 1 lần sau khi component mounted.

function Content2() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((pos) => setPost(pos));

    // callback được gọi lại nhiều lần dẫn tới ảnh hưởng không mong muốn.
    // nên ta truyền thêm đối số thứ 2 là mảng rỗng, để callback chỉ gọi 1 lần.
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content2;
