import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

export default function PostList({ isPosting, onClose }) {
  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onClose}>
        <NewPost onCancel={onClose} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author="Alejandro" body="TypeScript is incredible!" />
      </ul>
    </>
  );
}
