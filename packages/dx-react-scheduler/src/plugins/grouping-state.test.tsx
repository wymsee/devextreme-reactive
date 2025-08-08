import * as React from 'react';
import {
  testStatePluginField, pluginDepsToComponents, getComputedState, setupConsole,
} from '@synconset/dx-testing';
import {
  toggleExpandedGroups, HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION,
} from '@synconset/dx-scheduler-core';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { GroupingState } from './grouping-state';

jest.mock('@synconset/dx-scheduler-core', () => ({
  ...jest.requireActual('@synconset/dx-scheduler-core'),
  toggleExpandedGroups: jest.fn(),
}));

const defaultDeps = {
  getter: {},
};

describe('GroupingState', () => {
  let resetConsole;

  beforeAll(() => {
    resetConsole = setupConsole();
  });
  afterAll(() => {
    resetConsole();
  });

  beforeEach(() => {
    toggleExpandedGroups.mockImplementation(() => {});
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  testStatePluginField({
    defaultDeps,
    Plugin: GroupingState,
    propertyName: 'expandedGroups',
    values: [
      ['A'],
      ['B'],
      ['C'],
    ],
    actions: [{
      actionName: 'toggleGroupExpanded',
      reducer: toggleExpandedGroups,
      fieldReducer: false,
    }],
  });
  it('should provide "grouping" getter', () => {
    const tree = mount((
      <PluginHost>
        <GroupingState
          grouping={[{
            resourceName: 'a',
          }]}
        />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree).grouping)
      .toEqual([{
        resourceName: 'a',
      }]);
  });
  it('should provide "groupByDate" getter', () => {
    const tree = mount((
      <PluginHost>
        <GroupingState
          groupByDate={viewName => viewName !== 'day'}
        />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree).groupByDate('day'))
      .toBeFalsy();
    expect(getComputedState(tree).groupByDate('week'))
      .toBeTruthy();
  });
  it('should provide default "groupByDate" getter', () => {
    const tree = mount((
      <PluginHost>
        <GroupingState />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree).groupByDate('day'))
      .toBeFalsy();
    expect(getComputedState(tree).groupByDate('week'))
      .toBeFalsy();
  });
  it('should provide "groupOrientation" getter', () => {
    const tree = mount((
      <PluginHost>
        <GroupingState
          groupOrientation={viewName => viewName === 'day'
            ? HORIZONTAL_GROUP_ORIENTATION : VERTICAL_GROUP_ORIENTATION}
        />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree).groupOrientation('day'))
      .toBe(HORIZONTAL_GROUP_ORIENTATION);
    expect(getComputedState(tree).groupOrientation('week'))
      .toBe(VERTICAL_GROUP_ORIENTATION);
  });
  it('should provide default "groupOrientation" getter', () => {
    const tree = mount((
      <PluginHost>
        <GroupingState />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree).groupOrientation('day'))
      .toBe(HORIZONTAL_GROUP_ORIENTATION);
    expect(getComputedState(tree).groupOrientation('week'))
      .toBe(HORIZONTAL_GROUP_ORIENTATION);
  });
});
