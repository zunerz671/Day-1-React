export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdate();
  }

  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <hr />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={props.post.title} type="text" />
        </div>
        <div>
          Body: <input name="body" defaultValue={props.post.body} type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  )
}