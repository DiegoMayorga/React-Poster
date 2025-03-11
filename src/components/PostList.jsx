import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostList({ isPosting, onClose }) {
  const [/* posts,  */setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Alejandro" body="TypeScript is incredible!" />
      </ul>
    </>
  );
}
