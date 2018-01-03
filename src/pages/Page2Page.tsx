
import * as React from 'react';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

export const Page2Page = () => (
  <div>
    <Jumbotron>
      <h1>Page 2</h1>
      <p>
        A simple jumbotron-style component for calling extra attention to
        featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <Panel header="Page 2" bsStyle="primary">
      <h2>Page 2</h2>
    </Panel>
  </div>
);
