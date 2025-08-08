import { withComponents } from '@synconset/dx-react-core';
import { ColumnChooser as ColumnChooserBase } from '@synconset/dx-react-grid';
import { Overlay } from '../templates/parts/overlay';
import { Container } from '../templates/column-chooser/container';
import { Item } from '../templates/column-chooser/item';
import { ToggleButton } from '../templates/column-chooser/toggle-button';

export const ColumnChooser = withComponents({
  Container, Item, Overlay, ToggleButton,
})(ColumnChooserBase);
