
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel, Button, FormControlProps } from 'react-bootstrap';
import { PlaceOfServiceData, getPlaceOfServiceArray } from './PlaceOfServiceData';

interface PlaceofServiceProps {
  serviceUrl: string;
}

export class PlaceOfService extends React.Component<PlaceofServiceProps, {}> {
  serviceUrl: string;
  placeOfServiceArray: Array<PlaceOfServiceData>;

  constructor(props: PlaceofServiceProps) {
    super(props);

    this.serviceUrl = props.serviceUrl;
    this.placeOfServiceArray = getPlaceOfServiceArray(this.serviceUrl);
    this.onClick = this.onClick.bind(this);
  }

  createSelectOptionsFromPlaceofServices(placeOfServiceArray: Array<PlaceOfServiceData>): JSX.Element[] {
    return placeOfServiceArray.map((placeOfService: PlaceOfServiceData): JSX.Element => {
      const key = placeOfService.placeOfServiceId;
      const value = placeOfService.placeOfService;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  onClick(event: React.FormEvent<FormControlProps>) {
    // for now, do nothing
    event.preventDefault();
  }

  render() {
    return (
      <Panel header="Place of Service" bsStyle="primary">
        <FormGroup controlId="placeOfServiceId" bsSize="small">
          <ControlLabel>Place of Service:</ControlLabel>
          <FormControl componentClass="select">
            {this.createSelectOptionsFromPlaceofServices(this.placeOfServiceArray)}
          </FormControl>
        </FormGroup>

        <Button type="submit" bsStyle="primary" bsSize="small" onClick={this.onClick}>Create Place of Service</Button>
      </Panel>
    );
  }
}
