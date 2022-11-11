
import './App.css';
import sanityClient  from './client.js';

import {useEffect, useState} from "react";

function App() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]`
    ).then((data) => setPosts(data))
  },[])

  console.log(posts)

  return (
    <div className="App">
      {
        posts &&
        posts.map((post, index) => {
          return(
            <div key={post.index} className='card'>
              <h3>{post.name}</h3>
              <p>Author: {post.author}</p>
              <p>{post.description}</p>
              <p>{index}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
