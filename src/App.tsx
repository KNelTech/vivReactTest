import { FC } from 'react';
import {ItemList} from "./ItemList"
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <ItemList />
    </div>
  );
};
