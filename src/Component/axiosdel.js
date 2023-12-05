import React, { useState } from "react";
import axios from "axios";
function Put() {
  const [bucket, setBucket] = useState([]);
  const handleGet = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((info) => {
      console.log(info.data);
      setBucket((prevBucket) => [...prevBucket, ...info.data]);
    });
  };
  const handleDelete = () => {
    const updatedBucket = [...bucket];
    updatedBucket.shift();
    setBucket(updatedBucket);
  };
  return (
    <div>
      <button onClick={handleGet}>Click to add</button>
      <button onClick={handleDelete}>click to delete</button>
      <ul>
        {bucket.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Put;