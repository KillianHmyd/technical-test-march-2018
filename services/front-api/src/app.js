import bodyParser from 'body-parser';
import express from 'express';

import EXPRESS_CONF from 'conf/express';
import routes from 'routes';
import kafka from 'services/kafka';
import notFoundMiddlewares from 'middlewares/notFound';

const run = async () => {
  const app = express();

  app.use(bodyParser.json({ limit: '10mb' })); // For parsing application/json

  app.use(routes());

  app.use(notFoundMiddlewares);

  await kafka.init();
  app.listen(EXPRESS_CONF.EXPRESS_PORT, () => console.log(`Front-Api listening on ${EXPRESS_CONF.port}`));
};

run().catch((err) => {
  console.warn(err.message);
  process.exit(1);
});
