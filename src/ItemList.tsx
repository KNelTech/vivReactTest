import React, { FC, useState, useEffect } from "react";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ItemList: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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
  }
  
  
  return (
    <div>
      {selectedItem && (
        <div className="selected-item">
          <h2>Selected Item</h2>
          <p><strong>Title:</strong> {selectedItem.title}</p>
          <p>{selectedItem.body}</p>
        </div>
      )}
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)} className="item">
            <strong>User ID:</strong> {item.userId}, <strong>Title:</strong> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ItemList;
