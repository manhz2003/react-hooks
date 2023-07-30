import {useState} from 'react'

// One-way binding (ràng buộc một chiều):
// thay đổi bên trong code thì bên ngoài giao diện thay đổi.
// thay đổi bên ngoài giao diện thì bên trong không thay đổi.

// two-way binding 
// thay đổi bên ngoài giao diện thì cả trong và ngoài đều thay đổi.


// One-way binding (1 chiều, không làm thay đổi dữ liệu trên giao diện)
// ví dụ với thẻ input
function App1() {
  const [name, setName] = useState('')
    console.log(name);

  return (
    <div style={{padding: 20}}>
     <input onChange={(e) => setName(e.target.value)} />
     
     <button onClick = {() => setName('Nguyen Van B')}>change</button>
    </div>
  );
}

// two-way binding (làm thay đổi dữ liệu trên giao diện)
function App2() {
    const [name, setName] = useState('')
      console.log(name);
    
    return (
      <div style={{padding: 20}}>
       <input value={name} onChange={(e) => setName(e.target.value)} />
       
       <button onClick = {() => setName('Nguyen Van B')}>change</button>
      </div>
    );
  }

// ứng dụng two-way binding lấy dữ liệu của form.

  function App3() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log(name, email);
    }
    
    return (
      <div style={{padding: 20}}>
       <input value={name} onChange={(e) => setName(e.target.value)} />
       <input value={email} onChange={(e) => setEmail(e.target.value)} />
       
       <button onClick = {handleSubmit}>regiter</button>
      </div>
    );
  }

//   lấy ra radio được check.
function App4 (){
    const courses = [
        {
            id: 1,
            name: 'html css',
        },
        {
            id: 2,
            name: 'javascript',
        },
        {
            id: 3,
            name: 'reactJS',
        },
      ]

    const [checked, setChecked] = useState(2)

    const handleSubmit = () => {
        console.log({id: checked});
    }

    return (
        <div>
            {
                courses.map(course => 
                    <div key={course.id}>
                        <input type="radio" 
                            checked={checked === course.id}
                            onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                    </div>
                )
            }
            <button onClick={handleSubmit}>regiter</button>
        </div>
    )

}

//   lấy ra checkbox được check.
function App (){
    const courses = [
        {
            id: 1,
            name: 'html css',
        },
        {
            id: 2,
            name: 'javascript',
        },
        {
            id: 3,
            name: 'reactJS',
        },
      ]

      const [checked, setChecked] = useState([])
    //   console.log(checked)
    
    const handleCheck = (id) => {
        setChecked(prev => {
            // kiểm tra xem có id nào tồn tại trong mảng checked không.
            const isChecked = checked.includes(id)
            if(isChecked){

                // nếu đã có id thì trả ra mảng chứa các phần tử khác id đó.
                return checked.filter(item => item !== id)
            } else {

                // nếu chưa có id đó thì trả ra mảng chứa các phần tử trước đó, và phần tử vừa chọn.
                return [...prev, id]
            }
        })
    }

    const handleSubmit = () => {
        console.log({id: checked});
    }

    return (
        <div>
            {
                courses.map(course => 
                    <div key={course.id}>
                        <input 
                            type="checkbox" 
                            // kiểm tra xem id có tồn tại trong mảng checked không, nếu có thì trả về true.
                            // nếu không có điều kiện này thì chỉ check được 1 trong 3 checkbox.
                            checked={checked.includes(course.id)}

                            // khi người dùng thay đổi giá trị checkox hàm handleCheck sẽ được gọi.
                            // tích vào checkbox nào thì course.id sẽ là id đó.
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                )
            }
            <button onClick={handleSubmit}>regiter</button>
        </div>
    )

}

export default App;