export function PostNew() {
  return (
    <div id="post-new">
      <h1>Title</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image reference address: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
