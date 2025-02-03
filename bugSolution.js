```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function About() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await router.push('/'); // Navigate back to the home page
    setIsLoading(false);
  };

  return (
    <div>
      <h1>About Page</h1>
      {isLoading ? <p>Loading...</p> : <button onClick={handleClick}>Go Back Home</button>}
    </div>
  );
}
```