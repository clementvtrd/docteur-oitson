import { PingData } from '@/inngest/types/ping.type';

export type Events = {
  'job/ping': PingData;
};
