import React, { useEffect, useState } from "react";
import LinearChart from "./LinearChart";
import { Post } from "./types";
import "./styles.css";

const Chart = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="chart-container">
      <LinearChart
        data={[
          {
            id: "titleLengths",
            data: posts.map((post: Post) => ({
              x: post.id,
              y: post.title.length,
            })),
          },
        ]}
      />
    </div>
  );
};

export default Chart;
