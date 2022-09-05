import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>The page cannot be found</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}
