import { Controller, Get, Logger } from '@nestjs/common';
import { inngest } from '@/inngest/client';

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get()
  getHello(): string {
    this.logger.log('send job/ping to inngest');
    inngest.send({
      name: 'job/ping',
      data: {},
    });
    return 'Hello World!';
  }
}
