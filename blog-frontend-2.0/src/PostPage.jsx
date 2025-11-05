import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";

export function PostPage() {
  let posts = [
    {
      id: 1,
      title: "Turtles",
      body: "Haggan - CHamoru - Turtle",
      image: "https://i0.wp.com/www.guammuseumfoundation.org/wp-content/uploads/2022/03/haggan-betde-turtle-guam-museum-scaled.jpg?fit=2560%2C1636&ssl=1"
    },
    {
      id: 2,
      title: "Volleyball",
      body: "Haggan Volleyball",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuqm55w7SUMW_oDLdNSLDezW5fgqHdS2cyA&s"
    },
    {
      id: 3,
      title: "Players",
      body: "Haggan Volleyball Players",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQNHsMarDjc4Il2XjBTlS0X95OMxKjoVu7w&s"
    },
  ];

  return (
    <div>
      <PostNew />
      <PostIndex posts_prop={posts} />
    </div>
  );
}
