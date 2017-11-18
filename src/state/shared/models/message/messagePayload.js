const MessagePayloadType = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  CARD: 'CARD',
  CARDS_GALLERY: 'CARDS_GALLERY',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  FREE_INPUT: 'FREE_INPUT',
};

class MessagePayload {
  static createDefaultPayload({ type, }) {
    switch(type) {
      case MessagePayloadType.TEXT:
        return { delay: 0, text: '', };
      case MessagePayloadType.IMAGE:
        return { delay: 0, source: '', };

      // UNIMPLEMENTED BELOW:
      case MessagePayloadType.CARD:
        return { delay: 0, text: '', };
      case MessagePayloadType.CARDS_GALLERY:
        return { delay: 0, text: '', };
      case MessagePayloadType.VIDEO:
        return { delay: 0, source: '', };
      case MessagePayloadType.AUDIO:
        return { delay: 0, source: '', };
      case MessagePayloadType.FREE_INPUT:
        return { delay: 0, source: '', };
    }
  }
}

export { MessagePayload, MessagePayloadType, };
