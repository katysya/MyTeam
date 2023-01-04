import React, { FC, useState } from 'react';
import './Parameter.scss';

interface ParameterProps {
  value: number;
  onChange: any;
}

const Parameter: FC<ParameterProps> = ({ value, onChange }) => {
  const countRow = [5, 10, 15, 20];

  const [selected, setSelected] = useState(countRow[0]);

  const parameterChange = (event: any) => {
    setSelected(event.target.value);
    onChange?.(selected);
  };

  return (
    <form className="parameter">
      <label className="parameter__label">Показывать:</label>
      <select value={selected} onChange={parameterChange}>
        {countRow.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Parameter;
