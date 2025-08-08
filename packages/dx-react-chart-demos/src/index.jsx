import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initialize } from '@synconset/dx-demo-shell';
import '@synconset/dx-demo-shell/dist/index.css';
import { demos, migrationSamples } from './demo-registry.js';
import { themes } from './theme-registry.js';
import { themeComponents } from './theme-components-registry.js';
import { demoData } from './demo-data-registry.js';
import './index.css';

initialize({
  demoSources: demos,
  migrationSamples,
  themeSources: themes,
  themeComponents,
  demoData,
  renderDemo: ({
    element,
    demo: Demo,
    demoContainer,
  }) => {
    const DemoContainer = demoContainer || 'div';
    ReactDOM.render(
      (
        <React.StrictMode>
          <DemoContainer>
            <Demo />
          </DemoContainer>
        </React.StrictMode>
      ),
      element,
    );
  },
  unmountDemo: ({
    element,
  }) => {
    ReactDOM.unmountComponentAtNode(element);
  },
});
