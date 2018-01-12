import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap';
import CpdAreaData from './CommunityData';
import { DataAccess, handleError } from './../../common/DataAccess';

interface CommunityProps {
  serviceUrl: string;
}

interface CommunityState {
  data: ReadonlyArray<CpdAreaData> | null;
}

export class Community extends React.Component<CommunityProps, CommunityState> {
  private serviceUrl: string;
  private dataAccess: DataAccess<CpdAreaData>;

  public constructor(props: CommunityProps) {
    super(props);

    this.state = {
      data: null
    };

    this.serviceUrl = props.serviceUrl;
    this.dataAccess = new DataAccess<CpdAreaData>();
  }

  public componentDidMount(): void {
    if (!this.state.data) {
      this.dataAccess
        .getData(this.serviceUrl)
        .then((data: ReadonlyArray<CpdAreaData>) => this.setState({ data: data }))
        .catch(handleError);
    }
  }

  public render(): JSX.Element {
    if (this.state.data === null) {
      return (
        <Panel header="Community" bsStyle="primary">
          <div>Loading...</div>
        </Panel>
      );
    } else if (this.state.data.length === 0) {
      return (
        <Panel header="Community" bsStyle="danger">
          <div>No data</div>
        </Panel>
      );
    } else {
      return this.renderCommunityForm(this.state.data);
    }
  }

  private renderCommunityForm(cpdAreaArray: ReadonlyArray<CpdAreaData>): JSX.Element {
    return (
      <Panel header="Community" bsStyle="primary">
        <FormGroup controlId="cpdAreaDropDownList" bsSize="small">
          <ControlLabel>CPD Area:</ControlLabel>
          <FormControl componentClass="select">
            {this.createSelectOptionsFromCpdAreas(cpdAreaArray)}
          </FormControl>
        </FormGroup>
      </Panel>
    );
  }

  private createSelectOptionsFromCpdAreas(cpdAreaArray: ReadonlyArray<CpdAreaData>): JSX.Element[] {
    return cpdAreaArray.map((cpdArea: CpdAreaData): JSX.Element => {
      const key: number = cpdArea.cpdAreaId;
      const value: string = cpdArea.name;
      return (
        <option key={key} value={key}>
          {value}
        </option>
      );
    });
  }
}
