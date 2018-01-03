
import * as React from 'react';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

export const Page1Page = () => (
  <div>
    <Jumbotron>
      <h1>Page 1</h1>
      <p>Lengthy description.</p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <Panel header="Page 1" bsStyle="primary">
      <h2>Page 1</h2>
    </Panel>
  </div>
);
