import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState } from "react";

export function PostPage() {
  // let posts = [];

  const[posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
      // posts = response.data;
      setPosts(response.data);
    })
  }

  return (
    <div>
      <PostNew />
      <button onClick={handleIndex}>Load Posts</button>
      <PostIndex posts_prop={posts} />
    </div>


  );
}
