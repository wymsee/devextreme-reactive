import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from '@synconset/dx-react-core';
import { pluginDepsToComponents, getComputedState } from '@synconset/dx-testing';
import { ControllerComponent } from './controller-component';
import { isReadyToRenderSeries } from '@synconset/dx-chart-core';

jest.mock('@synconset/dx-chart-core', () => ({
  isReadyToRenderSeries: jest.fn().mockReturnValue('ready_test'),
}));

class Tree extends React.PureComponent {
  render() {
    const { defaultDeps, data } = this.props;
    return (
      <PluginHost>
        {pluginDepsToComponents(defaultDeps, {
          getter: {
            data,
          },
        })}
        <ControllerComponent />
      </PluginHost>
    );
  }
}

describe('ControllerComponent', () => {
  const defaultDeps = {
    getter: {
      layouts: 'test-layouts',
      centerDivRef: 'test-centerDivRef',
      axesExist: false,
    },
  };

  // tslint:disable-next-line: max-line-length
  it('should provide "readyToRenderSeries" getter and call isReadyToRenderSeries with correct props', () => {
    const tree = mount((
      <Tree defaultDeps={defaultDeps} data={['test']} />
    ));

    expect(getComputedState(tree).readyToRenderSeries)
      .toBe('ready_test');
    expect(isReadyToRenderSeries)
      .toBeCalledTimes(1);
    expect(isReadyToRenderSeries)
      .toBeCalledWith('test-layouts', 'test-centerDivRef', true, false);

    tree.setProps({
      data: [],
    });

    expect(getComputedState(tree).readyToRenderSeries)
      .toBe('ready_test');
    expect(isReadyToRenderSeries)
      .toBeCalledTimes(2);
    expect(isReadyToRenderSeries)
      .toBeCalledWith('test-layouts', 'test-centerDivRef', false, false);

    tree.setProps({
      data: ['test'],
    });

    expect(getComputedState(tree).readyToRenderSeries)
      .toBe('ready_test');
    expect(isReadyToRenderSeries)
      .toBeCalledTimes(3);
    expect(isReadyToRenderSeries)
      .toBeCalledWith('test-layouts', 'test-centerDivRef', true, false);
  });
});
