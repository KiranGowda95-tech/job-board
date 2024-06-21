import './styles.css';
import { useState } from 'react';

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0';
const EXAMPLE_RESPONSE = {
  by: 'kiran',
  id: 123456,
  score: 1,
  time: 23687235,
  title: 'something which is good',
  type: 'job',
  url: 'https://www.ycombinator.com',
};

export default function App() {
  const [items, setItems] = useState([EXAMPLE_RESPONSE,EXAMPLE_RESPONSE]);
  return (
    <div className='app'>
      <h1>Hacker News Job Board</h1>
      {items.length < 1 ? <p>Loading...</p> : <div>Job Listing</div>}
    </div>
  );
}
