import * as React from 'react';
import {
  Getter, Plugin,
} from '@synconset/dx-react-core';
import { tableColumnsWithDataRows, checkTableColumnExtensions } from '@synconset/dx-grid-core';
import { Table } from '../../types';

export const TableColumnsWithDataRowsGetter: React.FunctionComponent<
  { columnExtensions?: Table.ColumnExtension[]; }
> = React.memo(({ columnExtensions }) => {
  const tableColumnsComputed = React.useCallback(
    ({ columns }) => (
      tableColumnsWithDataRows(columns, columnExtensions!)
    ), [columnExtensions]);
  checkTableColumnExtensions(columnExtensions!);

  return (
    <Plugin>
      <Getter name="tableColumns" computed={tableColumnsComputed} />
    </Plugin>
  );
});
