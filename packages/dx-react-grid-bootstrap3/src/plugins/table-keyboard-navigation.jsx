import { withComponents } from '@synconset/dx-react-core';
import { TableKeyboardNavigation as TableKeyboardNavigationBase } from '@synconset/dx-react-grid';
import { FocusCell as Cell } from '../templates/table-focus-cell';
import { FocusRow as Row } from '../templates/table-focus-row';

export const TableKeyboardNavigation = withComponents({ Cell, Row })(TableKeyboardNavigationBase);
