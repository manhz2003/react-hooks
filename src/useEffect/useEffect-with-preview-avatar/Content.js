import { useState, useEffect } from "react";
// có 3 trường hợp khi sử dụng useEffect.

// 1. useEffect(callback)
// -  gọi callback của useEffect mỗi khi component re-render.
// -  gọi callback của useEffect sau khi thêm element vào DOM.

// 2. useEffect(callback, [])
// -  chỉ gọi callback của useEffect 1 lần sau khi component mounted.

// 3. useEffect(callback, [deps])
// -  gọi callback của useEffect mỗi khi deps thay đổi.

// * Lý thuyết chung của 3 trường hợp.
//   + callback của useEffect được gọi lại mỗi khi component mounted.
//   + clearnup function luôn được gọi trước khi component unmount.
//   + clearnup function luôn được gọi trước khi callback được gọi.

// làm chức năng cho 1 thẻ input có type là file khi thêm file thì hiển thị ảnh đó lên.
function Content() {
  const [avatar, setAvatar] = useState();

  // vấn đề gặp phải là khi thay đổi ảnh khác, thì url ảnh cũ vẫn tồn tại trong bộ nhớ
  // vì vậy cần sử dụng useEffect để clearnup function tránh bị rò rỉ bộ nhớ.

  // mỗi khi deps thay đổi, tức là mỗi khi chọn avatar mới để up lên thì callback sẽ được gọi.
  useEffect(() => {
    // clearnup function
    return () => {
      avatar && URL.revokeObjectURL(avatar.PreviewAvatar);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    // lấy ra đối tượng chứa thông tin của tệp tin (ảnh) mà người dùng đã chọn từ input[type="file"].
    const file = e.target.files[0];

    // Thêm cho đối tượng file 1 key là PreviewAvatar va gán cho nó value là url của ảnh
    file.PreviewAvatar = URL.createObjectURL(file);

    // set file cho avatar.
    setAvatar(file);
  };

  return (
    <>
      <input type="file" onChange={handlePreviewAvatar} />

      {/* nếu avatar chứa file ảnh thì in ra ảnh đó, lấy link bằng cách đối tượng avatar.PreviewAvatar trỏ 
          đến key chứa value là url ảnh.
      */}
      {avatar && <img src={avatar.PreviewAvatar} alt="" width={"80%"} />}
    </>
  );
}

export default Content;
