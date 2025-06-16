import React, { useEffect, useState } from "react";
const Login = () => {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const DataFetch = async (link) => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        setIsloading(true);
        setError("");
        const data = await fetch(link, { signal });
        if (!data.ok) throw new Error("sth went wrong");
        const newData = await data.json();
        setPosts(newData);
      } catch (err) {
        console.error("Error fetching data:", error);
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    DataFetch("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return (
    <div>
      <h1>get your response </h1>
      {isloading && <p>Loading...</p>}
      {!isloading && error && <p>Error: {error}</p>}
      {!isloading && !error && (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Login;
