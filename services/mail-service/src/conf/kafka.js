const KAFKA_CONF = {
  KAFKA_PORT: process.env.KAFKA_PORT || 9092,
  KAFKA_HOST: process.env.KAFKA_HOST || '127.0.0.1',
  ZOOKEEPER_HOST: process.env.ZOOKEEPER_HOST || '127.0.0.1',
  ZOOKEEPER_PORT: process.env.ZOOKEEPER_PORT || 2181,
  CONSUMER_GROUP_ID: process.env.CONSUMER_GROUP_ID || 'MailService',
  MESSAGE_TOPIC: process.env.MESSAGE_TOPIC || 'Messages',
};

export default KAFKA_CONF;
