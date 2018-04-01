# Slack service

A Slack service sending every consumed message from a specific kafka's topic to a slack channel.

## Docker

To build an image docker of the service, simply run `docker build . -t <image-tag>`

## Variables

The environment variables to set are :

| Name              | Description                           | Default      |
|-------------------|---------------------------------------|--------------|
| ZOOKEEPER_HOST    | The Zookeeper's host address.         | 127.0.0.1    |
| ZOOKEEPER_PORT    | The Zookeeper's port.                 | 2181         |
| CONSUMER_GROUP_ID | The Kafka consumer group's id.        | SlackService |
| MESSAGE_TOPIC     | The Kafka's topic on which to listen. | Messages     |
| SLACK_TOKEN       | The Slack's token.                    |              |
| SLACK_CHANNEL_ID  | The Slack channel's id                |              |

## Start

### With docker

```
docker build . -t slack-service && docker run slack-service
```

### With node

```
npm i && npm run build && npm run start
```
