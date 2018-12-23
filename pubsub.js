const redis = require('redis');

const CHANNELS = {
  TEST: 'TEST',

};

class PubSub {
  constructor({ redisUrl }) {

    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.subscribeToChannels();

    this.subscriber.on(
      'message',
      (channel, message) => this.handleMessage(channel, message)
    );
  }

  handleMessage(channel, message) {
    console.log(`Message received. Channel: ${channel}. Message: ${message}.`);
  }
}

const testPubSub = new PubSub();

seTimeout(() => testPubSub.publisher.publish(CHANNELS.TEST, 'foo'), 1000);
