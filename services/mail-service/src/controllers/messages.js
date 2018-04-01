import mailService from 'services/mail';

export default async (message) => {
  const info = await mailService.sendEmail(`Message from topic ${message.topic}`, message.value);
  console.log(`Email sent to ${String(info.envelope.to)}`);
};
