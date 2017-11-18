import React from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import { DeviceEditor, } from './deviceEditor';
import { DevicePreview, } from './devicePreview';
import { MessagesList, } from './messagesList';

const CreateSequence = (props) => {
  const _handlePressBack = () => {
    props.history.goBack();
  };

  const renderLeftIcon = () => (
    <IconButton
      className='muidocs-icon-custom-github'
      onClick={_handlePressBack}
      tooltipPosition="bottom-center"
      tooltip="Go Back"
    >
      <ChevronLeft />
    </IconButton>
  );

  const renderTopNavBar = () => (
    <AppBar
      iconElementLeft={renderLeftIcon()}
      title={'Create a new sequence'}
    />
  );

  const renderWorkspace = () => (
    <Grid>
      <Row>
        <Col md={3} lg={3}>
          <MessagesList />
        </Col>
        <Col md={5} lg={5}>
          <DeviceEditor />
        </Col>
        <Col md={4} lg={4}>
          <DevicePreview />
        </Col>
      </Row>
    </Grid>
  );

  return (
    <section>
      {renderTopNavBar()}
      {renderWorkspace()}
    </section>
  );
};

export {
  CreateSequence,
};
