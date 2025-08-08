import { PureReducer } from '@synconset/dx-core';
import { AppointmentMeta } from '../../types';

export const setAppointmentMeta: PureReducer<AppointmentMeta, AppointmentMeta> = (
  prevAppointmentMeta,
  { target, data },
) => ({ target, data });
