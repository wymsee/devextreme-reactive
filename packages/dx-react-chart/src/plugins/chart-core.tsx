import * as React from 'react';
import { Plugin, Getter, Getters } from '@synconset/dx-react-core';
import { buildScales, scaleSeriesPoints } from '@synconset/dx-chart-core';

const getScales = ({ domains, ranges }: Getters) => buildScales(domains, ranges);

const getSeries = ({
  series, scales, rotated,
}: Getters) => scaleSeriesPoints(series, scales, rotated);

export class ChartCore extends React.PureComponent {
  render() {
    return (
      <Plugin>
        <Getter name="scales" computed={getScales} />
        <Getter name="series" computed={getSeries} />
      </Plugin>
    );
  }
}
