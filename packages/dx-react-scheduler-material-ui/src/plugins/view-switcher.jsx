import { withComponents } from '@synconset/dx-react-core';
import { ViewSwitcher as ViewSwitcherBase } from '@synconset/dx-react-scheduler';
import { Switcher } from '../templates/view-switcher/switcher';

export const ViewSwitcher = withComponents({ Switcher })(ViewSwitcherBase);
