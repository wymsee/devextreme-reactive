import { withComponents } from '@synconset/dx-react-core';
import { ScatterSeries as ScatterSeriesBase } from '@synconset/dx-react-chart';
import { Point } from '../templates/series/point';

export const ScatterSeries = withComponents({ Point })(ScatterSeriesBase);
