# Front api

A Front Api exposing a endpoint `POST /api/messages` allowing to send a message to Kafka on a specific topic.

## Usage

Send a json to the route `POST /api/messages`

E.g:

```
{
  "message": "Hello !!"
}
```

## Docker

To build an image docker of the service, simply run `docker build . -t <image-tag>`

## Variables

The environment variables to set are :

| Name                        | Description                            | Default          |
|-----------------------------|----------------------------------------|------------------|
| ZOOKEEPER_HOST              | The Zookeeper's host address.          | 127.0.0.1        |
| ZOOKEEPER_PORT              | The Zookeeper's port.                  | 2181             |
| CONSUMER_GROUP_ID           | The Kafka consumer group's id.         | MailService      |
| MESSAGE_TOPIC               | The Kafka's topic on which to publish. | Messages         |
| EXPRESS_PORT                | The Express's port on which to listen  | 8080             |

## Start

### With docker

```
docker build . -t mail-service && docker run mail-service
```

### With node

```
npm i && npm run build && npm run start
```
