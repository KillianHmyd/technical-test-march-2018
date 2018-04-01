import express from 'express';

import messagesControllers from 'controllers/messages';

export default () => {
  const router = express.Router();
  router.use('/messages', messagesControllers());
  return router;
};
