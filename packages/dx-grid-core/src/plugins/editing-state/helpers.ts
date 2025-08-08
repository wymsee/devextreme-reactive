import { PureComputed } from '@synconset/dx-core';
import { RowId, RowChanges } from '../../types';

export const getRowChange: PureComputed<[RowChanges, RowId], any> = (
  rowChanges, rowId,
) => rowChanges[rowId] || {};
