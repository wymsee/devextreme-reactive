import { PureComputed } from '@synconset/dx-core';
import { TABLE_HEADING_TYPE } from './constants';
import { TableRow } from '../../types';

export const tableRowsWithHeading: PureComputed<[TableRow[]]> = headerRows => [
  { key: TABLE_HEADING_TYPE.toString(), type: TABLE_HEADING_TYPE },
  ...headerRows];
