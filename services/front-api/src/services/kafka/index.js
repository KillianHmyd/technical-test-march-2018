import kafka from 'kafka-node';

import KAFKA_CONFIG from 'conf/kafka';

let client;
let producer;

const isInit = () => producer !== undefined;

const init = () => new Promise((resolve, reject) => {
  const { Client, HighLevelProducer } = kafka;
  const { ZOOKEEPER_PORT, ZOOKEEPER_HOST } = KAFKA_CONFIG;

  client = new Client(`${ZOOKEEPER_HOST}:${ZOOKEEPER_PORT}`);

  producer = new HighLevelProducer(client);
  producer.on('ready', () => resolve());
  producer.on('error', err => reject(err));
});

const publish = (topic, messages) => new Promise((resolve, reject) => {
  if (!isInit) throw new Error("Kafka isn't initialized");

  producer.send([{ topic, messages }], (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});

export default {
  init,
  publish,
};
