export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
    </div>
  )
}