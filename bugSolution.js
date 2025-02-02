```javascript
// pages/index.js

export default function Home() {
  const [count, setCount] = useState(0); // Now this works!

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```