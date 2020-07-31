const Message = require('../Message/Message');

class User {
  timeline = [];
  following = [];
  followers = [];

  constructor(name) {
    this.name = name;
  }

  postMessage(content) {
    const poster = this.name;
    const message = new Message(content, poster);
    this.timeline.push(message);
  }

  viewMessages(user = this) {
    return user.timeline;
  }

  followUser(user) {
    if (user === this) {
      throw new Error('Nice try, but you cannot follow yourself! :)');
    }
    user.followers.push(this);
    this.following.push(user);
  }

  viewTimeline() {
    let aggregateTimeline = [...this.timeline];
    this.following.forEach((user) => {
      aggregateTimeline = aggregateTimeline.concat(user.timeline);
    });
    aggregateTimeline.sort((msg1, msg2) => {
      return msg2.id - msg1.id;
    });
    return aggregateTimeline;
  }
}

module.exports = User;
