import * as React from 'react';
import {
  Getter,
  Plugin,
  Getters,
} from '@synconset/dx-react-core';
import {
  orderedColumns,
} from '@synconset/dx-grid-core';
import { OrderedTableColumnsProps } from '../../types';

/** @internal */
export const OrderedTableColumns: React.FunctionComponent<
  OrderedTableColumnsProps
> = ({
  order=[],
}) => {
  const columnsComputed = (
    { tableColumns }: Getters,
  ) => orderedColumns(tableColumns, order!);

  return (
    <Plugin>
      <Getter name="tableColumns" computed={columnsComputed} />
    </Plugin>
  );
};



