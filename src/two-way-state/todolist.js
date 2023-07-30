import { useState } from "react";

function App() {
  // khi lưu vào storate dữ liệu là dạng json nên khi lấy ra cần chuyển về mảng.
  const storateJob = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");

  // khi dữ liệu chưa lưu gì vào storate nó sẽ trả về null nên nếu là null thì in ra mảng rỗng.
  const [jobs, setJobs] = useState(storateJob ?? []);

  const handleSubmit = () => {
    setJobs((prev) => {
      // đưa dữ liệu job sau khi nhập vào mảng của jobs.
      const newJob = [...prev, job];

      // chuyển dữ liệu về json và lưu vào local storate.
      const jsonJob = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJob);

      return newJob;
    });

    // clear text của thẻ input sau khi nhập song.
    setJob("");
  };

  // xoá từng job
  const handleDelete = (index) => {
    setJobs((prev) => {
      const updateJob = [...prev];
      updateJob.splice(index, 1);
      const jsonJobs2 = JSON.stringify(updateJob);
      localStorage.setItem("jobs", jsonJobs2);

      return updateJob;
    });
  };

  return (
    <div>
      <input value={job} onChange={(e) => setJob(e.target.value)} />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
