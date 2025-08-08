import { withComponents } from '@synconset/dx-react-core';
import { SearchPanel as SearchPanelBase } from '@synconset/dx-react-grid';
import { SearchPanelInput as Input } from '../templates/search-panel-input';

export const SearchPanel = withComponents({ Input })(SearchPanelBase);
