import * as React from 'react';
import {
  Plugin,
  Getter,
  Getters,
} from '@synconset/dx-react-core';
import { changeSeriesState, SELECTED } from '@synconset/dx-chart-core';
import { SelectionStateProps } from '../types';

class SelectionStateBase extends React.PureComponent<SelectionStateProps> {
  render() {
    const { selection } = this.props;
    const targets = selection || [];
    const getSeries = ({ series }: Getters) => changeSeriesState(series, targets, SELECTED);
    return (
      <Plugin name="SelectionState">
        <Getter name="series" computed={getSeries} />
      </Plugin>
    );
  }
}

export const SelectionState: React.ComponentType<SelectionStateProps> = SelectionStateBase;
