
import * as React from 'react';
import { mount } from 'enzyme';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { PluginHost } from '@synconset/dx-react-core';
import {
  orderedColumns,
} from '@synconset/dx-grid-core';
import { OrderedTableColumns } from './ordered-table-columns';

jest.mock('@synconset/dx-grid-core', () => ({
  orderedColumns: jest.fn(),
}));

const defaultDeps = {
  getter: {
    tableColumns: [{ type: 'undefined', id: 1, column: 'column' }],
  },
};

const defaultProps = {
  order: ['a', 'b'],
};

describe('OrderedTableColumns', () => {
  beforeEach(() => {
    orderedColumns.mockImplementation(() => 'orderedColumns');
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should extend tableColumns', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents(defaultDeps)}
        <OrderedTableColumns
          {...defaultProps}
        />
      </PluginHost>
    ));

    expect(getComputedState(tree).tableColumns)
      .toBe('orderedColumns');
    expect(orderedColumns)
      .toBeCalledWith(
        defaultDeps.getter.tableColumns,
        defaultProps.order,
      );
  });
});
