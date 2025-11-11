import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function PostPage() {
  // let posts = [];

  const[posts, setPosts] = useState([]);

  const[isPostShowVisible, setIsPostShowVisible] = useState(false);

  const[currentPost, setCurrentPost] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
      // posts = response.data;
      setPosts(response.data);
    });
  };

  const handleShow = (post) => {
    console.log("handleShow", post);
    setIsPostShowVisible(true);
    setCurrentPost(post);
  };

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts", params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdate = () => {
    console.log("handleUpdate");
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <PostNew onCreate={handleCreate} />
      <PostIndex posts_prop={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={() => setIsPostShowVisible(false)}>
        <PostsShow post={currentPost} onUpdate={handleUpdate} />
      </Modal>
    </div>
  );

}
