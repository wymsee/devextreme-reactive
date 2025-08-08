import { withComponents } from '@synconset/dx-react-core';
import { PagingPanel as PagingPanelBase } from '@synconset/dx-react-grid';
import { Pager as Container } from '../templates/paging-panel/pager';

export const PagingPanel = withComponents({ Container })(PagingPanelBase);
