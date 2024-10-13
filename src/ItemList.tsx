import { FC, useState, useEffect } from "react";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const ItemList: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);


  /* Sync with api, grab JSON, put in item array, catch errors, update loading. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Item[] = await response.json();
        setItems(data);
      } catch (error: any) {
        setError(`Fetch items failed: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  /* Reuse state to apply styling class */
  const getItemClass = (item: Item, selectedItem: Item | null) => {
    return `item ${selectedItem && selectedItem.id === item.id ? 'selected-indicator' : ''}`
  }

  /* these are here if we need to catch an error or loading first */
  if (loading) {
    return <div className="popup-message">
      <p>We're loading the page for you.</p>
      <span className="loading-spinner"></span>
    </div>;
  }

  if (error) {
    return (
      <div className="popup-message">
        <p>Oh no, something went wrong.</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="selected-item">
        {selectedItem ? (
          <>
            <h1>Selected Item Body:</h1>
            <p>{selectedItem.body}</p>
          </>
        ) : (
          <h1>Select An Item.</h1>
        )}
      </div>
      <ul className="item-list">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={getItemClass(item, selectedItem)}
          >
            <strong>User ID:</strong> {item.userId}, <strong>Title:</strong>{" "}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
