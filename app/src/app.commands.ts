import { Utils } from '@/commands/utils';
import { Module } from '@nestjs/common';

@Module({
  providers: [Utils],
})
export class CommandsModule {}
