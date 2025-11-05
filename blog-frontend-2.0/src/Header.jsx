export function Header(props) {
  return (
    <header>
      <a href="#">Home</a> | <a href="#">All Posts</a> | <a href="#">New Post</a> | <a href="#">{props.name}</a>
    </header>
  );
}
