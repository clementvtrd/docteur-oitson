import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { serve } from 'inngest/express';
import { getInngestFunctions } from '@/inngest/functions';
import { inngest } from '@/inngest/client';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
  });

  app.useBodyParser('json', { limit: '10mb' });

  const logger = app.get(Logger);
  const appService = app.get(AppService);

  const inngestFunctions = getInngestFunctions({
    appService,
    logger,
  });

  app.use(
    '/api/inngest',
    serve({
      client: inngest,
      functions: inngestFunctions,
    }),
  );

  await app.listen(3000);
}
bootstrap();
