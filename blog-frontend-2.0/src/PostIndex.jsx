export function PostIndex(props) {
  return (
    <div id="post-index">
      <h1>All {props.posts_prop.length} Posts</h1>
      {props.posts_prop.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>body: {post.body}</p>
          <button onClick={() => props.onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
