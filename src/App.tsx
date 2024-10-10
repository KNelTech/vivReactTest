import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
// Create a React component called ItemList.
// Fetch data from https://jsonplaceholder.typicode.com/posts API endpoint.
// Display the list of items in an unordered list (<ul>).
// Each item in the list should display its userId and title.
// Handle loading and error states appropriately.
// Add a Click event and show the body element of the item at the top of the page.
