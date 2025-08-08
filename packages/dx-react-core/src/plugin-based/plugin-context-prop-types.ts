import { PluginHost, PluginPositionFn } from '@synconset/dx-core';
import { PLUGIN_HOST_CONTEXT, POSITION_CONTEXT } from './constants';

/** @internal */
export type PluginContextProps = {
  [PLUGIN_HOST_CONTEXT]: PluginHost,
  [POSITION_CONTEXT]: PluginPositionFn;
};
