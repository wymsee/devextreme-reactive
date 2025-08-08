import { withComponents } from '@synconset/dx-react-core';
import { CurrentTimeIndicator as CurrentTimeIndicatorBase } from '@synconset/dx-react-scheduler';
import { Indicator } from '../templates/current-time-indicator/indicator';

export const CurrentTimeIndicator = withComponents({ Indicator })(CurrentTimeIndicatorBase);
