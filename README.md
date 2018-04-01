# Techincal test

A micro-services application composed by 3 node services communicating via Kafka:

1. A Front Api exposing a endpoint `POST /api/messages` allowing to send a message to Kafka on a specific topic.
2. A Slack service sending every consumed message from a specific kafka's topic to a slack channel.
3. An Email service sending every consumed message from a specific kafka's topic to an email address.

---

This is a [lerna](https://github.com/lerna/lerna) mono-repo, composed of the following projects:

  - [front-api](./services/front-api): The front api of the application.
  - [mail-service](./services/mail-service): The mail service.
  - [slack-service](./services/slack-service): The slack service.

---

## How to run

### With docker-compose

* Log in `docker.killianhamayada.fr`

or

* Build manually the three services ([front-api](./services/front-api/README.md#Docker), [mail-service](./services/mail-service/README.md#Docker), [slack-service](./services/slack-service/README.md#Docker))
* Edit [docker-compose.yml](./docker-compose.yml) with the good environment variables ([front-api](./services/front-api/README.md#Variables), [mail-service](./services/mail-service/README.md#Variables), [slack-service](./services/slack-service/README.md#Variables)).

* Run `docker-compose pull && docker-compose up`

### Manually

* Start a kafka, zookeeper and maildev.
* Set your environment variable ([front-api](./services/front-api/README.md#Variables), [mail-service](./services/mail-service/README.md#Variables), [slack-service](./services/slack-service/README.md#Variables)).
* Start the services ([front-api](./services/front-api/README.md#Start), [mail-service](./services/mail-service/README.md#Start), [slack-service](./services/slack-service/README.md#Start))
