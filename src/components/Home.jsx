import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isLoaded,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // Os dois pontos depois da variável data significa:
  // Seu nome será referido como blogs a partir de agora

  return (
    <div className="home">
      <h2>Trending Blogs</h2>

      {error && <div>{error}</div>}
      {isLoaded && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
