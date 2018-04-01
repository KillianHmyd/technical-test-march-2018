import kafka from 'kafka-node';

import KAFKA_CONFIG from 'conf/kafka';

const consume = (topic, controller) => {
  const { ConsumerGroup } = kafka;
  const { ZOOKEEPER_PORT, ZOOKEEPER_HOST, CONSUMER_GROUP_ID } = KAFKA_CONFIG;

  const options = {
    groupId: CONSUMER_GROUP_ID,
    host: `${ZOOKEEPER_HOST}:${ZOOKEEPER_PORT}`,
    autoCommit: false,
  };

  const consumerGroup = new ConsumerGroup(options, topic);

  console.log(`Group ${options.groupId} listening on ${topic}`);

  consumerGroup.on('message', async (messages) => {
    await controller(messages);
    consumerGroup.commit(() => {});
  });

  consumerGroup.on('error', err => console.warn(`Error while listening on ${topic}: ${err}`));
};

export default { consume };
