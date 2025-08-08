import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { Palette } from './palette';

describe('Palette', () => {
  it('should provide options', () => {
    const scheme = ['a', 'b', 'c'];
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <Palette scheme={scheme} />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      palette: scheme,
    });
  });
});
