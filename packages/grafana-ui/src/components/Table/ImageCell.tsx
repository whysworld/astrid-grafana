import React, { FC } from 'react';
import { TableCellProps } from './types';

export const ImageCell: FC<TableCellProps> = (props) => {
  const { field, cell, tableStyles, cellProps } = props;

  const displayValue = field.display!(cell.value);

  return (
    <div {...cellProps} className={`${tableStyles.cellContainer} grafana-table-cell-container`}>
      <img src={displayValue.text} className={`${tableStyles.imageCell} grafana-table-image-cell`} />
    </div>
  );
};
