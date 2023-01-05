import React, { FC } from 'react';
import './Parameter.scss';

interface ParameterProps {
  value?: number;
  onChange: (value: number) => void;
}

const Parameter: FC<ParameterProps> = ({ value, onChange }) => {
  const countRow = [5, 10, 15, 20];

  const parameterChange = (event: any) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="parameter">
      <label className="parameter__label">Показывать:</label>
      <select
        className="parameter__count"
        value={value}
        onChange={parameterChange}>
        {countRow.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Parameter;
