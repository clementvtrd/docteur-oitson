import { Logger } from '@nestjs/common';
import { AppService } from '@/app.service';
import { inngest } from '@/modules/common/inngest/client';

export const ping = (dependencies: {
  logger: Logger;
  appService: AppService;
}) => {
  return inngest.createFunction(
    { id: 'ping' },
    { event: 'job/ping' },
    async ({ step }) => {
      await step.run('start async job', async () => {
        dependencies.logger.log('ping');
        dependencies.appService.getHello();
      });
    },
  );
};
