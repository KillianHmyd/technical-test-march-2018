import express from 'express';

import kafka from 'services/kafka';
import KAFKA_CONFIG from 'conf/kafka';
import sendError from 'helpers/sendError';

const postMessages = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    sendError(res, 'Invalid payload', 400);
    return;
  }

  try {
    const responseKafka = await kafka.publish(KAFKA_CONFIG.MESSAGE_TOPIC, message);
    res.send(responseKafka);
  } catch (err) {
    sendError(res, JSON.stringify(err), 500);
  }
};

export default () => {
  const router = express.Router();

  router.post('/', postMessages);

  return router;
};
