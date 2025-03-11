import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  let modalContent;

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Alejandro" body="TypeScript is incredible!" />
      </ul>
    </>
  );
}
