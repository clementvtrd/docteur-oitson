import { Logger } from '@nestjs/common';

import { AppService } from 'src/app.service';
import { ping } from './ping';

export const getInngestFunctions = (dependencies: {
  appService: AppService;
  logger: Logger;
  // Add Dependencies Here
}) => {
  return [
    ping({
      appService: dependencies.appService,
      logger: dependencies.logger,
    }),
    // Call other funtions with dependencies here like above
  ];
};
