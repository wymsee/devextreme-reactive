import { withComponents } from '@synconset/dx-react-core';
import { ExportPanel as ExportPanelBase } from '@synconset/dx-react-grid';
import { ToggleButton } from '../templates/export-panel/toggle-button';
import { Menu } from '../templates/export-panel/menu';
import { MenuItem } from '../templates/export-panel/menu-item';

export const ExportPanel = withComponents({
  ToggleButton, Menu, MenuItem,
})(ExportPanelBase);
