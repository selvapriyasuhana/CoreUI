// src/Home.js

// Home.js and Menu.js
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    console.log('Home component rendered');
  }, []);

  return (
    <div>
      <h2>Welcome to Our Restaurant!</h2>
      <p>Discover a world of flavors...</p>
    </div>
  );
}

export default Home;


/*function Home() {
  return (
    <div>
      <h2>Welcome to Our Restaurant!</h2>
      <p>Discover a world of flavors...</p>
    </div>
  );
}

export default Home;*/
