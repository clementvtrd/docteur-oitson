import { Module } from '@nestjs/common';
import { AppService } from '@/app.service';
import { IntentsBitField } from 'discord.js';
import { NecordModule } from 'necord';

@Module({
  imports: [
    NecordModule.forRoot({
      token: process.env.DISCORD_BOT_TOKEN ?? '',
      intents: [IntentsBitField.Flags.Guilds],
      development: [process.env.DISCORD_DEVELOPMENT_GUILD_ID ?? ''],
    }),
  ],
  providers: [AppService],
})
export class DiscordModule {}
