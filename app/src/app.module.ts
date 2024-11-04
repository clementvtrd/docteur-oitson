import { Logger, Module } from '@nestjs/common';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { DiscordModule } from '@/modules/discord';
import { DiscordListener } from '@/listeners/discord';
import { CommandsModule } from '@/app.commands';

@Module({
  imports: [DiscordModule, CommandsModule],
  controllers: [AppController],
  providers: [Logger, AppService, DiscordListener],
})
export class AppModule {}
