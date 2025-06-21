import React, { useEffect, useState } from "react";
const Login = () => {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect((timeout = 3000) => {
    const DataFetch = async (link) => {
      const controller = new AbortController();
      const signal = controller.signal;

      const timeOutId = setTimeout(() => controller.abort(), timeout);

      try {
        if (!navigator.onLine) {
          throw new Error("No internet connection");
        }
        setIsloading(true);
        setError("");

        const data = await fetch(link, { signal });

        if (!data.ok) throw new Error("sth went wrong");

        const newData = await data.json();
        setPosts(newData);
      } catch (err) {
        console.log(err.message);
        if (err.message === "AbortError") {
          setError("Request Aborted or time out ");
        } else if (err.message === "Failed to fetch") {
          setError("check your connection");
        } else {
          setError(err.message);
        }
      } finally {
        setIsloading(false);
        clearTimeout(timeOutId);
      }

      return () => {
        controller.abort();
      };
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
