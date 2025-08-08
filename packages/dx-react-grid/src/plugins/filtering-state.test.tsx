import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import {
  pluginDepsToComponents, getComputedState, testStatePluginField, setupConsole,
} from '@synconset/dx-testing';
import { changeColumnFilter, getColumnExtensionValueGetter } from '@synconset/dx-grid-core';
import { FilteringState } from './filtering-state';

jest.mock('@synconset/dx-grid-core', () => ({
  changeColumnFilter: jest.fn(),
  getColumnExtensionValueGetter: jest.fn(),
  filterExpression: jest.fn().mockReturnValue('filters'),
}));

const defaultDeps = {
  getter: {
    rows: [{ id: 1 }],
  },
};

describe('FilteringState', () => {
  let resetConsole;

  beforeAll(() => {
    resetConsole = setupConsole();
  });
  afterAll(() => {
    resetConsole();
  });

  beforeEach(() => {
    changeColumnFilter.mockImplementation(() => []);
    getColumnExtensionValueGetter.mockImplementation(() => () => {});
  });

  testStatePluginField({
    defaultDeps,
    Plugin: FilteringState,
    propertyName: 'filters',
    values: [
      [{ columnName: 'a', value: 'a' }],
      [{ columnName: 'b', value: 'a' }],
      [{ columnName: 'c', value: 'a' }],
    ],
    actions: [{
      actionName: 'changeColumnFilter',
      reducer: changeColumnFilter,
    }],
  });

  describe('column extensions', () => {
    it('should correctly call getColumnExtensionValueGetter', () => {
      const columnExtensions = [{ columnName: 'a', filteringEnabled: true }];
      mount((
        <PluginHost>
          {pluginDepsToComponents(defaultDeps)}
          <FilteringState
            columnFilteringEnabled={false}
            columnExtensions={columnExtensions}
          />
        </PluginHost>
      ));

      expect(getColumnExtensionValueGetter)
        .toBeCalledWith(columnExtensions, 'filteringEnabled', false);
    });
  });

  describe('filter expression', () => {
    it('should provide filter expression', () => {
      const defaultFilters = [{ columnName: 'a', value: 'a' }];

      const tree = mount((
        <PluginHost>
          {pluginDepsToComponents(defaultDeps)}
          <FilteringState
            defaultFilters={defaultFilters}
          />
        </PluginHost>
      ));

      expect(getComputedState(tree).filterExpression)
        .toEqual('filters');
    });
  });
});
