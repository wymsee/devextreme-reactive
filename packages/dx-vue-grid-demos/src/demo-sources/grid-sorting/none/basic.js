import {
  DxSortingState,
  DxIntegratedSorting,
} from '@synconset/dx-vue-grid';
import {
  DxGrid,
  DxTable,
  DxTableHeaderRow,
} from '@synconset/dx-vue-grid-bootstrap4';

import { generateRows } from '../../../demo-data/generator';

export default {
  data() {
    return {
      sorting: [],
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({ length: 8 }),
    };
  },
  template: `
    <div class="card">
      <dx-grid
        :rows="rows"
        :columns="columns"
      >
        <dx-sorting-state
          :sorting.sync="sorting"
        />
        <dx-integrated-sorting />
        <dx-table />
        <dx-table-header-row
          showSortingControls
        />
      </dx-grid>
    </div>
  `,
  components: {
    DxSortingState,
    DxIntegratedSorting,
    DxGrid,
    DxTable,
    DxTableHeaderRow,
  },
};
