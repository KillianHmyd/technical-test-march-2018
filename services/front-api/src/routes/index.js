import express from 'express';

import api from 'routes/api';

export default () => {
  const router = express.Router();
  router.use('/', api());
  return router;
};

