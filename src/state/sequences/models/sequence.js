class Sequence {
  static create({ name, }) {
    return {
      id: null,
      name,
      messages: [],
    };
  }

  static addMessage(sequence, messageId) {
    sequence.messages.push(messageId);
  }

  static removeMessage(sequence, messageId) {
    sequence.messages.filter(mId => mId !== messageId);
  }
}