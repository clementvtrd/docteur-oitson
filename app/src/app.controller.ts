import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { inngest } from '@/modules/common/inngest/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    inngest.send({
      name: 'job/ping',
      data: {},
    });
    return this.appService.getHello();
  }
}
