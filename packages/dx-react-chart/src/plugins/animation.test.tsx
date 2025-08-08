import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { buildAnimation } from '@synconset/dx-chart-core';
import { Animation } from './animation';

jest.mock('@synconset/dx-chart-core', () => ({
  buildAnimation: jest.fn().mockReturnValue('test-animation'),
  easeOutCubic: jest.fn(),
}));

describe('Animation', () => {
  afterEach(jest.clearAllMocks);

  it('should provide default optinos', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <Animation />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      animation: 'test-animation',
    });
    expect(buildAnimation).toBeCalledWith(expect.any(Function), 1000);
  });

  it('should provide custom options', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <Animation easing={jest.fn()} duration={20} />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      animation: 'test-animation',
    });
    expect(buildAnimation).toBeCalledWith(expect.any(Function), 20);
  });
});
