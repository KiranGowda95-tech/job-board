import "./styles.css";
import { useState } from "react";

// const ITEMS_PER_PAGE = 6;
//   const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";\
//   const EXAMPLE_RESPONSE={
//     "name":"kiran",
//     "age":27
//   }

export default function App() {
  const [items, setItems] = useState();
  return (
    <div className="app">
      <h1>Hacker News Job Board</h1>
      {items.length < 1 ? <p>Loading...</p> : <div>Job Listing</div>}
    </div>
  );
}
