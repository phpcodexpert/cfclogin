import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Audience.css';

const Audience = (props) => {
  const renderPeople = () => props.audience.map(person => (
    <ListItem key={person.id}>
      <Grid>
        <Row>
          <Col className="person-name-column">{person.name}</Col>
          <Col className="person-tags-column">{person.tags.join(', ')}</Col>
        </Row>
      </Grid>
    </ListItem>
  ));

  const renderHeading = () => (
    <Grid>
      <Row>
        <Col className="person-name-column">Name</Col>
        <Col className="person-tags-column">Tags</Col>
      </Row>
    </Grid>
  )

  return (
    <section>
      <h1>My Audience</h1>
      <List>
        {renderHeading()}
        {renderPeople()}
      </List>
    </section>
  );
};

export {
  Audience,
};
