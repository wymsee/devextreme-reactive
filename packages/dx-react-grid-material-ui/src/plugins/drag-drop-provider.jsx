import { withComponents } from '@synconset/dx-react-core';
import { DragDropProvider as DragDropProviderBase } from '@synconset/dx-react-grid';
import { Container, Column } from '../templates/drag-drop';

export const DragDropProvider = withComponents({ Container, Column })(DragDropProviderBase);
