import Post from "./Post";
import classes from "./PostList.module.css"

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Diego" body="React.js is awesome!" />
      <Post author="Alejandro" body="TypeScript is incredible!" />
    </ul>
  );
}
