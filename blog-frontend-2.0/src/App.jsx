import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostPage } from "./PostPage";
import { Welcome } from "./Welcome";

function App() {
  let name1 = "Junior";
  let name2 = "Matt";
  let name3 = "Ron";

  return (
    <div>
      <Header name={name1}/>
      <Welcome name={name1}/>
      <Welcome name={name2}/>
      <Welcome name={name3}/>
      <PostPage />
      <Footer />
    </div>
  )
}

export default App
