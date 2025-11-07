import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
import { Modal } from "./Modal";

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

  const handleShow = (post) => {
    console.log("handleShow", post);
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <PostNew />
      <PostIndex posts_prop={posts} onShow={handleShow} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );

}
