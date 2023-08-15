import { useReducer, useRef } from "react";

// xây dựng ứng dụng todolist với useReducer

// luồng hoạt động
// + hàm useReducer nhận vào 2 đối số là init state và reducer.
// + hàm useReducer trả về 1 object gồm giá trị khởi tạo và hàm dispatch.
// + hàm dispatch dùng để gửi các action (hành động) khi người dùng tương tác giao diện.
// + hàm reducer sẽ nhận và xử lý các action từ hàm dispatch sau đó trả về 1 state mới.
// + khi gửi dữ liệu từ dispatch đến reducer thường có 1 hàm chứa payload để vận chuyển dữ liệu.

// 1. init state
const initState = {
  job: "",
  jobs: [],
};

// 2. action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payLoad) => {
  return {
    type: SET_JOB,
    payLoad,
  };
};

const addJob = (payLoad) => {
  return {
    type: ADD_JOB,
    payLoad,
  };
};

const deleteJob = (payLoad) => {
  return {
    type: DELETE_JOB,
    payLoad,
  };
};

// 3. reducer
const reducer = (state, action) => {
  let newState;
  console.log(typeof state);
  console.log(typeof action.payLoad);
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payLoad,
      };
      break;

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payLoad],
      };
      break;

    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payLoad, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;

    default:
      throw new Error("invalid action");
  }
  console.log(newState);
  return newState;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <>
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter todo ..."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
