import { PingData } from '@/modules/common/inngest/types/ping.type';

export type Events = {
  'job/ping': PingData;
};
