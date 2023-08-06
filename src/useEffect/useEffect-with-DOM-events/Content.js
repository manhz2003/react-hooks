import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");

  // nút cuộn trang
  const [showGoToTop, setShowGoToTop] = useState(false);

  console.log(type);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((pos) => setPost(pos));
  }, [type]);

  // ứng dụng useEffect với DOM event ví dụ với event scroll.

  // Bài toán 1: sử dụng scroll
  //    + Khi cuộn chuột xuống cuối trang có 1 nút khi bấm vào trang được cuộn lên đầu.
  //    + Khi chưa cuộn xuống thì ẩn nút đó đi.

  // Khi lắng nghe sự kiện ta chỉ add event 1 lần nên ta sẽ sử dụng cách 2: useEffect(callback, [])

  useEffect(() => {
    // khi cuộn xuống 200px thì hiện button gototop, khi cuộn lên nhỏ hơn 200 thì ẩn nút.
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ta add 1 event ở phạm vi window nên chỉ khi tắt trình duyệt đi thì event này mới được gỡ bỏ
    // khi unmount event này vẫn tồn tại, khi mount thì 1 event khác lại được thêm vào thêm 1 lần
    // gây ra hiện tượng rò rỉ bộ nhớ, vì vậy sau khi kết thúc ta cần phải remove event đi.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // bấm vào button thì cuộn lên đầu trang
  const handleScrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={handleScrollClick}
        >
          go to top
        </button>
      )}
    </div>
  );
}

export default Content;
