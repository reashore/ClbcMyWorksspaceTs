
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel, Button, FormControlProps } from 'react-bootstrap';
import PlaceOfServiceData from './PlaceOfServiceData';
import { DataAccess, handleError } from './../../common/DataAccess';

interface PlaceOfServiceProps {
  serviceUrl: string;
}

interface PlaceOfServiceState {
  data: ReadonlyArray<PlaceOfServiceData> | null;
}

export class PlaceOfService extends React.Component<PlaceOfServiceProps, PlaceOfServiceState> {
  private serviceUrl: string;
  private dataAccess: DataAccess<PlaceOfServiceData>;

  public constructor(props: PlaceOfServiceProps) {
    super(props);

    this.state = {
      data: null
    };

    this.serviceUrl = props.serviceUrl;
    this.dataAccess = new DataAccess<PlaceOfServiceData>();

    this.onClick = this.onClick.bind(this);
  }

  public componentDidMount(): void {
    if (!this.state.data) {
          this.dataAccess.getData(this.serviceUrl)
              .then((data: ReadonlyArray<PlaceOfServiceData>) => this.setState({ data: data }))
              .catch(handleError);
      }
  }

  public render(): JSX.Element {
    if (this.state.data === null) {
      return (
        <Panel header="Place of Service" bsStyle="primary">
          <div>Loading...</div>
        </Panel>
      );
    } else if (this.state.data.length === 0) {
      return (
        <Panel header="Place of Service" bsStyle="danger">
          <div>No data</div>
        </Panel>
      );
    } else {
      return this.renderPlaceOfServiceForm(this.state.data);
    }
  }

  private renderPlaceOfServiceForm(placeOfServiceArray: ReadonlyArray<PlaceOfServiceData>): JSX.Element {
    return (
      <Panel header="Place of Service" bsStyle="primary">
        <FormGroup controlId="placeOfServiceDropDownList" bsSize="small">
          <ControlLabel>Place of Service:</ControlLabel>
          <FormControl componentClass="select">
            {this.createSelectOptionsFromPlaceofServices(placeOfServiceArray)}
          </FormControl>
        </FormGroup>

        <Button type="submit" bsStyle="primary" bsSize="small" onClick={this.onClick}>Create Place of Service</Button>
      </Panel>
    );
  }

  private createSelectOptionsFromPlaceofServices(placeOfServiceArray: ReadonlyArray<PlaceOfServiceData>): JSX.Element[] {
    return placeOfServiceArray.map((placeOfService: PlaceOfServiceData): JSX.Element => {
      const key: number = placeOfService.placeOfServiceId;
      const value: string = placeOfService.name;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // For event signature, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  private onClick(event: React.FormEvent<FormControlProps>) {
    // for now, do nothing
    event.preventDefault();
  }
}
