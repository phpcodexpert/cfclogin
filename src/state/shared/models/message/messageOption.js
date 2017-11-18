const MessageOptionType = {
  BUTTON: 'BUTTON',
  QUICK_REPLY: 'QUICK_REPLY',
};

const MessageOptionAction = {
  OPEN_URL: 'OPEN_URL',
  GO_TO_FLOW: 'GO_TO_FLOW',
};

class MessageOption {
  static createButton({ text, action, }) {
    return {
      type: MessageOptionType.BUTTON,
      text,
      action,
      payload: {},
    }
  }

  static updateText(messageOption, { text, }) {
    return { ...messageOption, text, };
  }

  static updateAction(messageOption, { action, payload, }) {
    return { ...messageOption, action, payload, }
  }
}

export { MessageOption, MessageOptionType, MessageOptionAction, };
