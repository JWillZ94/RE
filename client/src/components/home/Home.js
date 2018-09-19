import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

import './Home.css';

const Home = () => (
  <Grid>
    <Row className="home-title">
      <Col>
        <p>RE Genie</p>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="lg">Learn More</Button>
        </ButtonToolbar>
      </Col>
    </Row>
  </Grid>
);

export default Home;
