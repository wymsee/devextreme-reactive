import { SeriesRef, NotifyPointerMoveFn, HandlerFnList } from './index';
import { Getters } from '@synconset/dx-react-core';
import { PureComputed } from '@synconset/dx-core';

export interface HoverStateProps {
  /** Specifies a series or point that is initially displayed hovered */
  defaultHover?: SeriesRef;
  /** Specifies a series or point that is hovered */
  hover?: SeriesRef;
  /** A function that is executed when the hover target is changed */
  onHoverChange?: NotifyPointerMoveFn;
}
/** @internal */
export type HoverStateState = {
  hover?: SeriesRef;
};
/** @internal */
export type GetPointerMoveHandlersFn = PureComputed<[Getters], HandlerFnList>;
