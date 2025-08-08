import { ZoomAndPan as ZoomAndPanBase } from '@synconset/dx-react-chart';
import { withComponents } from '@synconset/dx-react-core';
import { DragBox } from '../templates/zoom-and-pan/drag-box';

export const ZoomAndPan = withComponents({ DragBox })(ZoomAndPanBase);
