import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { AxesLayout } from './axes-layout';

describe('AxesLayout', () => {
  it('should provide getter', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <AxesLayout />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      centerDivRef: { current: null },
    });
  });
});
