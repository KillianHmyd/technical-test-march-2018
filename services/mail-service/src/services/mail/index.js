import nodemailer from 'nodemailer';
import EMAIL_CONFIG from 'conf/mail';

const sendEmail = async (subject, text) => {
  const {
    SENDER_EMAIL_ADDRESS,
    RECEIPIENT_EMMAIL_ADDRESS,
    MAILDEV_HOST,
    MAILDEV_PORT,
  } = EMAIL_CONFIG;

  const transport = nodemailer.createTransport({
    host: MAILDEV_HOST,
    port: MAILDEV_PORT,
    ignoreTLS: true,
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: RECEIPIENT_EMMAIL_ADDRESS,
    subject,
    text,
  };

  return new Promise((resolve, reject) => transport.sendMail(mailOptions, (err, info) => {
    if (err) return reject(err);
    return resolve(info);
  }));
};

export default { sendEmail };
