
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap';
import { CpdAreaData, getCpdAreaArray } from './CommunityData';

export interface CommunityProps {
  serviceUrl: string;
}

class Community extends React.Component<CommunityProps, {}> {
  cpdAreas: Array<CpdAreaData>;
  serviceUrl: string;

  constructor(props: CommunityProps) {
    super(props);

    this.serviceUrl = props.serviceUrl;
    this.cpdAreas = getCpdAreaArray(this.serviceUrl);
  }

  // todo: Fix return type ()
  createSelectOptionsFromCpdAreas(cpdAreas: Array<CpdAreaData>): any {
    return cpdAreas.map((cpdArea: CpdAreaData) => {
      const key: number = cpdArea.cpdAreaId;
      const value: string = cpdArea.cpdArea;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  render() {
    return (
      <Panel header="Community" bsStyle="primary">
        <FormGroup controlId="cpdAreaId" bsSize="small">
          <ControlLabel>CPD Area:</ControlLabel>
          <FormControl componentClass="select">
            {this.createSelectOptionsFromCpdAreas(this.cpdAreas)}
          </FormControl>
        </FormGroup>
      </Panel>
    );
  }
}

export default Community;
