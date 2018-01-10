
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap';
import { CpdAreaData, getCpdAreaArray } from './CommunityData';

interface CommunityProps {
  serviceUrl: string;
}

export class Community extends React.Component<CommunityProps, {}> {
  private cpdAreas: Array<CpdAreaData>;
  private serviceUrl: string;

  public constructor(props: CommunityProps) {
    super(props);

    this.serviceUrl = props.serviceUrl;
    this.cpdAreas = getCpdAreaArray(this.serviceUrl);
  }

  public render(): JSX.Element {
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

  private createSelectOptionsFromCpdAreas(cpdAreas: Array<CpdAreaData>): JSX.Element[] {
    return cpdAreas.map((cpdArea: CpdAreaData): JSX.Element => {
      const key: number = cpdArea.cpdAreaId;
      const value: string = cpdArea.cpdArea;
      return <option key={key} value={key}>{value}</option>;
    });
  }
}
