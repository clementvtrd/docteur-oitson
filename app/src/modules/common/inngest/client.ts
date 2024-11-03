import { EventSchemas, Inngest } from 'inngest';

import { Events } from '@/modules/common/inngest/types';

export const inngest = new Inngest({
  id: 'docteur-oitson',
  schemas: new EventSchemas().fromRecord<Events>(),
});
