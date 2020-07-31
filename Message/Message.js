class Message {
  static messageID = 0;

  constructor(message, poster) {
    this.id = Message.assignID();
    this.poster = poster;
    this.message = message;
    this.timeStamp = Date.now();
  }

  static assignID() {
    return this.messageID++;
  }
}

module.exports = Message;
