import { withComponents } from '@synconset/dx-react-core';
import { DragDropProvider as DragDropProviderBase } from '@synconset/dx-react-scheduler';
import { DraftAppointment, SourceAppointment } from '../templates/drag-drop/appointments';
import { Container } from '../templates/drag-drop/container';
import { Resize } from '../templates/drag-drop/resize';

export const DragDropProvider = withComponents({
  DraftAppointment, SourceAppointment, Container, Resize,
})(DragDropProviderBase);
