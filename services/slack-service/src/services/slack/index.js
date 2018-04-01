const { WebClient } = require('@slack/client');

let webClient;

const init = async (token) => {
  webClient = new WebClient(token);
  await webClient.auth.test();
};

const sendMessage = async (channelId, message) =>
  webClient.chat.postMessage({ channel: channelId, text: message });

export default {
  init,
  sendMessage,
};
