import { withComponents } from '@synconset/dx-react-core';
import { TableInlineCellEditing as TableInlineCellEditingBase } from '@synconset/dx-react-grid';
import { EditCell as Cell } from '../templates/table-edit-cell';

export const TableInlineCellEditing = withComponents({ Cell })(TableInlineCellEditingBase);
