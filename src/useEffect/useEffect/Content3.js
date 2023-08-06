import { useEffect, useState } from "react";

// tạo ra 1 tab gồm 3 nút khi bấm vào nút nào sẽ call api tương ứng với nút đó.

// 3. useEffect(callback, [deps])
// -  gọi callback của useEffect mỗi khi deps thay đổi.

const tabs = ["posts", "comments", "albums"];

function Content3() {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");

  console.log(type);
  useEffect(() => {
    // call back của useEffect sẽ được gọi lại mỗi khi type thay đổi.
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((pos) => setPost(pos));

    // ta truyền gì vào thì nó sẽ là des ở đây des là type.
    // mỗi khi des thay đổi thì callback sẽ được gọi lại 1 lần.
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content3;
