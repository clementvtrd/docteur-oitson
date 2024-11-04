import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class Utils {
  @SlashCommand({
    name: 'ping',
    description: 'Simple command to check if the bot is online.',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: '... Pong!' });
  }
}
