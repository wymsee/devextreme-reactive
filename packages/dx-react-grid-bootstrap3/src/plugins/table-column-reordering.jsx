import { withComponents } from '@synconset/dx-react-core';
import { TableColumnReordering as TableColumnReorderingBase } from '@synconset/dx-react-grid';
import { TableInvisibleRow as Row } from '../templates/table-invisible-row';
import { TableReorderingCell as Cell } from '../templates/table-reordering-cell';

export const TableColumnReordering = withComponents({ Row, Cell })(TableColumnReorderingBase);
