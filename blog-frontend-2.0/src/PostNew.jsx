export function PostNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCreate();
  }
  return (
    <div id="post-new">
      <h1>Title</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image reference address: <input name="image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
