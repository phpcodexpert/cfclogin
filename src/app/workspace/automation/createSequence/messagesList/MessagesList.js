import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Chat from 'material-ui/svg-icons/communication/chat';

const MessagesList = (props) => {
  return (
    <section>
      <h4>Messages</h4>
      <List>
        <ListItem
          leftIcon={<Chat />}
        >
          Message #1
        </ListItem>
      </List>
    </section>
  )
};

export {
  MessagesList,
};
