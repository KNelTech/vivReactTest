import React, { FC, useState, useEffect } from 'react';


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


    return null; //Temp return
    
  
};

export default ItemList;