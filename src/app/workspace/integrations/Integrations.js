import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardActions, CardText, } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Integrations = (props) => {
  return (
    <section>
      <h1>My Integrations</h1>
      <Grid>
        <Row>
          <Col>
            <Card>
              <CardHeader>Shopify</CardHeader>
              <CardText>Integrated with Shopify</CardText>
              <CardActions>
                <RaisedButton label='Unlink' />
              </CardActions>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>Mailchimp</CardHeader>
              <CardText>Integrated with Mailchimp</CardText>
              <CardActions>
                <RaisedButton label='Unlink' />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export {
  Integrations,
};
