import React, { FC, PropsWithChildren } from 'react';
import './Row.scss';

interface RowProps extends PropsWithChildren {
  className?: string;
}
const Row: FC<RowProps> = ({ children, className }) => {
  return className ? (
    <tr className={className}>{children}</tr>
  ) : (
    <tr>{children}</tr>
  );
};

export default Row;
