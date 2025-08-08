import { withComponents } from '@synconset/dx-react-core';
import { TableColumnVisibility as TableColumnVisibilityBase } from '@synconset/dx-react-grid';
import { EmptyMessage } from '../templates/empty-message';

export const TableColumnVisibility = withComponents({ EmptyMessage })(TableColumnVisibilityBase);
