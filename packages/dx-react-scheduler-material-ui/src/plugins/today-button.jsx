import { withComponents } from '@synconset/dx-react-core';
import { TodayButton as TodayButtonBase } from '@synconset/dx-react-scheduler';
import { TodayButton as Button } from '../templates/today-button/today-button';

export const TodayButton = withComponents({ Button })(TodayButtonBase);
