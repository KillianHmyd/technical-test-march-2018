import events from 'events';
import kafka from 'services/kafka';

console.log('Starting mail service...');
events.map(({ topic, controller }) => kafka.consume(topic, controller));
console.log('Mail service started');

