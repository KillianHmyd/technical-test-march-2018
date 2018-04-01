import KAFKA_CONFIG from 'conf/kafka';
import messagesController from 'controllers/messages';


export default ({
  topic: KAFKA_CONFIG.MESSAGE_TOPIC,
  controller: messagesController,
});

