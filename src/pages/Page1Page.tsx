
import * as React from 'react';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

const Page1Page = () => (
  <div>
    <Jumbotron>
      <h1>Page 1</h1>
      <p>
        A simple jumbotron-style component for calling extra attention to
        featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <Panel header="Page 1" bsStyle="primary">
      <h2>Page 1</h2>
    </Panel>
  </div>
);

export default Page1Page;
