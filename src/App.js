import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [post, setPost] = useState([]);
  const [add, setAdd] = useState('');
  const changeHandler = (e) => {
    setAdd(e.target.value);
  };
  const handleClick = () => {
    if (add !== '') {
      setPost([...post, add]);
      setAdd('');
    } else {
      console.log('please add post');
    }
  };
  const deleteHandler = (id) => {
    let del = post.filter((a) => a != id);
    setPost(del);
  };
  console.log(post);
  return (
    <div>
      <input name="Add" onChange={changeHandler} />
      <button onClick={handleClick}>Add</button>
      <br />
      {post
        ? post.map((a, index) => {
            return (
              <div key={index}>
                <input type="checkbox" value={a} />
                <label><div className="area">{a}</div></label>
                <button onClick={() => deleteHandler(a)}>delete</button>
              </div>
            );
          })
        : null}
      <br />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
