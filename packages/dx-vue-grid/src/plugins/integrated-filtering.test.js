import { mount } from '@vue/test-utils';
import { DxPluginHost } from '@synconset/dx-vue-core';
import { filteredRows, filteredCollapsedRowsGetter, unwrappedFilteredRows } from '@synconset/dx-grid-core';
import { DxIntegratedFiltering } from './integrated-filtering';
import { PluginDepsToComponents, getComputedState } from './test-utils';

const defaultDeps = {
  getter: {
    rows: [{ id: 0 }, { id: 1 }],
    filterExpression: [{ columnName: 'a' }],
    getCellValue: () => {},
    getCollapsedRows: () => [],
    getRowLevelKey: () => undefined,
  },
  plugins: ['DxFilteringState'],
};

jest.mock('@synconset/dx-grid-core', () => ({
  filteredRows: jest.fn(),
  filteredCollapsedRowsGetter: jest.fn(),
  unwrappedFilteredRows: jest.fn(),
}));

describe('DxIntegratedFiltering', () => {
  beforeEach(() => {
    filteredRows.mockImplementation(() => ({ rows: 'filteredRows' }));
    filteredCollapsedRowsGetter.mockImplementation(() => 'filteredCollapsedRowsGetter');
    unwrappedFilteredRows.mockImplementation(() => 'unwrappedFilteredRows');
  });
  afterEach(() => {
    filteredRows.mockClear();
  });
  it('should provide rows getter', () => {
    const tree = mount({
      render() {
        return (
          <DxPluginHost>
            <PluginDepsToComponents deps={defaultDeps} />
            <DxIntegratedFiltering />
          </DxPluginHost>
        );
      },
    });

    expect(getComputedState(tree).rows)
      .toBe(unwrappedFilteredRows());

    expect(filteredRows)
      .toBeCalledWith(
        defaultDeps.getter.rows,
        defaultDeps.getter.filterExpression,
        defaultDeps.getter.getCellValue,
        expect.any(Function),
        defaultDeps.getter.getRowLevelKey,
        defaultDeps.getter.getCollapsedRows,
      );

    expect(unwrappedFilteredRows)
      .toBeCalledWith(filteredRows());
  });

  it('should provide getCollapsedRows getter', () => {
    const tree = mount({
      render() {
        return (
          <DxPluginHost>
            <PluginDepsToComponents deps={defaultDeps} />
            <DxIntegratedFiltering />
          </DxPluginHost>
        );
      },
    });

    expect(getComputedState(tree).getCollapsedRows)
      .toBe(filteredCollapsedRowsGetter());

    expect(filteredCollapsedRowsGetter)
      .toBeCalledWith(filteredRows());
  });
});
