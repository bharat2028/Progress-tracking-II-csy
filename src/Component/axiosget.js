import React, { useState } from "react";
import axios from "axios";
function Get() {
  const [bucket, setBucket] = useState([]);
  const handleDetails = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((temp) => {
      console.log(temp.data);
      setBucket((prevBucket) => [...prevBucket, ...temp.data]);
    });
  };
  handleDetails();
  return (
    <div>
      <button onClick={handleDetails}>click me</button>
      <ul>
        {bucket.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Get;