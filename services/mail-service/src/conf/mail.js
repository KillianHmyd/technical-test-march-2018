const MAIL_CONF = {
  SENDER_EMAIL_ADDRESS: process.env.SENDER_EMAIL_ADDRESS || 'sender@test.fr',
  RECEIPIENT_EMMAIL_ADDRESS: process.env.RECEIPIENT_EMMAIL_ADDRESS || 'receiver@test.fr',
  MAILDEV_HOST: process.env.MAILDEV_HOST || 'localhost',
  MAILDEV_PORT: process.env.MAILDEV_PORT || '1025',
};

export default MAIL_CONF;
