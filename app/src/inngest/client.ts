import { EventSchemas, Inngest } from 'inngest';

import { Events } from '@/inngest/types';

export const inngest = new Inngest({
  id: 'docteur-oitson',
  schemas: new EventSchemas().fromRecord<Events>(),
});
