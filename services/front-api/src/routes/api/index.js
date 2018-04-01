import express from 'express';

import messages from 'routes/api/messages';

export default () => {
  const router = express.Router();
  router.use('/api', messages());
  return router;
};
