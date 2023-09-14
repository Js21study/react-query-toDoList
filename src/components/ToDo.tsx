import React, { useState } from 'react';
import { ITodo } from '../@types/ITodo';

export const ToDo: React.FC<ITodo> = ({ todo, completed }) => {
  const [checked, setChecked] = useState(completed);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label htmlFor="checkbox">{todo}</label>
    </li>
  );
};
