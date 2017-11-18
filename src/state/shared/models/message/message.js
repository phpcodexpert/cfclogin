class Message {
  static create({ type, order, }) {
    return {
      id: null,//createUUID(),
      type,
      order,
      payload: MessagePayload.createDefaultPayload({ type, }),
      options: [],
    };
  } 
}

export { Message, };
