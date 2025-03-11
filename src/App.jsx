import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function toggleModalHandler() {
    setModalIsVisible((prevState) => !prevState);
  }

  return (
    <main>
      <MainHeader onCreatePost={toggleModalHandler} />
      <PostList isPosting={modalIsVisible} onClose={toggleModalHandler} />
    </main>
  );
}

export default App;
