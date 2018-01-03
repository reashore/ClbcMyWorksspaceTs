
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel, Button } from 'react-bootstrap';
import { PlaceOfServiceData, getPlaceOfServiceArray } from './PlaceOfServiceData';

export interface PlaceofServiceProps {
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

  createSelectOptionsFromPlaceofServices(placeOfServiceArray: Array<PlaceOfServiceData>) {
    return placeOfServiceArray.map((placeOfService: PlaceOfServiceData) => {
      const key = placeOfService.placeOfServiceId;
      const value = placeOfService.placeOfService;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  onClick(event: any) {
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
