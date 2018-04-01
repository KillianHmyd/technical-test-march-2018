import events from 'events';
import kafka from 'services/kafka';
import slackService from 'services/slack';
import slackConfig from 'conf/slack';

const run = async () => {
  console.log('Starting slack service...');
  await slackService.init(slackConfig.SLACK_TOKEN);
  events.map(({ topic, controller }) => kafka.consume(topic, controller));
  console.log('Slack service started');
};

run();
