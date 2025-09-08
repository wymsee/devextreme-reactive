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

// Define default order outside component to maintain referential equality
const DEFAULT_ORDER: string[] = [];

/** @internal */
export const OrderedTableColumns: React.FunctionComponent<
  OrderedTableColumnsProps
> = ({
  order = DEFAULT_ORDER,
}) => {
  const columnsComputed = React.useCallback(
    ({ tableColumns }: Getters) => orderedColumns(tableColumns, order),
    [order]
  );

  return (
    <Plugin>
      <Getter name="tableColumns" computed={columnsComputed} />
    </Plugin>
  );
};