import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Routes, } from '../../Routes';
import './Automation.css';

const Automation = (props) => {
  console.log('props', props.history);
  const _handleNewSequenceClick = () => {
    props.history.push(Routes.CreateSequence);
  };

  const renderSequences = () => props.sequences.map(sequence => (
    <ListItem key={sequence.id}>
      <Grid>
        <Row>
          <Col className="sequence-date-column">{sequence.dateCreated}</Col>
          <Col className="sequence-name-column">{sequence.name}</Col>
        </Row>
      </Grid>
    </ListItem>
  ));

  const renderGridHeading = () => (
    <Grid>
      <Row>
        <Col className="sequence-date-column">Date</Col>
        <Col className="sequence-name-column">Name</Col>
      </Row>
    </Grid>
  );

  const renderAddSequenceButton = () => (
    <FlatButton
      label='+ New sequence'
      onClick={_handleNewSequenceClick}
    />
  );

  const renderTopbar = () => {
    return (
      <AppBar
        showMenuIconButton={false}
        title={'My sequences'}
        iconElementRight={renderAddSequenceButton()}
      />
    )
  };

  return (
    <section>
      {renderTopbar()}
      {renderGridHeading()}
      <List>
        {renderSequences()}
      </List>
    </section>
  );
};

export {
  Automation,
};
