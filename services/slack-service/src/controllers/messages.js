import slackService from 'services/slack';
import slackConfig from 'conf/slack';

export default async (message) => {
  const info = await slackService.sendMessage(slackConfig.SLACK_CHANNEL_ID, message.value);
  console.log(`Slack message sent on channel ${info.channel} by ${info.message.username}`);
};
