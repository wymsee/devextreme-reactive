import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { BasicData } from './basic-data';

jest.mock('@synconset/dx-chart-core', () => ({
  defaultDomains: 'test-domains',
}));

describe('Basis Data', () => {
  it('should provide basic getters', () => {
    const data = [1, 2, 3];
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <BasicData data={data as any} rotated={'test-rotated' as any} />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      data,
      domains: 'test-domains',
      series: [],
      rotated: 'test-rotated',
    });
  });
});
