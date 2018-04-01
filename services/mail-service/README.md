# Mail service

An Email service sending every consumed message from a specific kafka's topic to an email address.

## Docker

To build an image docker of the service, simply run `docker build . -t <image-tag>`

## Variables

The environment variables to set are :

| Name                        | Description                           | Default          |
|-----------------------------|---------------------------------------|------------------|
| ZOOKEEPER_HOST              | The Zookeeper's host address.         | 127.0.0.1        |
| ZOOKEEPER_PORT              | The Zookeeper's port.                 | 2181             |
| CONSUMER_GROUP_ID           | The Kafka consumer group's id.        | MailService      |
| MESSAGE_TOPIC               | The Kafka's topic on which to listen. | Messages         |
| SENDER_EMAIL_ADDRESS        | The sender's email address            | sender@test.fr   |
| RECEIPIENT_EMMAIL_ADDRESS   | The recipient's email address         | receiver@test.fr |
| MAILDEV_HOST                | The MailDev's host address.           | localhost        |
| MAILDEV_PORT                | The MailDev's port                    | 1025             |

## Start

### With docker

```
docker build . -t mail-service && docker run mail-service
```

### With node

```
npm i && npm run build && npm run start
```
