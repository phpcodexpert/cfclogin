import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Broadcast.css';

const Broadcast = (props) => {
  const renderBroadcasts = () => props.broadcasts.map(broadcast => (
    <ListItem key={broadcast.id}>
      <Grid>
        <Row>
          <Col className="broadcast-date-column">{broadcast.dateCreated}</Col>
          <Col className="broadcast-name-column">{broadcast.name}</Col>
        </Row>
      </Grid>
    </ListItem>
  ));

  const renderHeading = () => (
    <Grid>
      <Row>
        <Col className="broadcast-date-column">Date</Col>
        <Col className="broadcast-name-column">Name</Col>
      </Row>
    </Grid>
  )

  return (
    <section>
      <h1>My Broadcasts</h1>
      <List>
        {renderHeading()}
        {renderBroadcasts()}
      </List>
    </section>
  );
};

export {
  Broadcast,
};
