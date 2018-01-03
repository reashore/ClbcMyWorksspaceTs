
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { VendorData, getVendorArray } from './VendorData';

export interface VendorState {
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export interface VendorProps {
  serviceUrl: string;
}

export class Vendor extends React.Component<VendorProps, VendorState> {
  private serviceUrl: string;
  private vendorArray: Array<VendorData>;
  private _vendorId: HTMLInputElement;

  constructor(props: VendorProps) {
    super(props);

    this.state = {
      ocgNumber: '',
      managingQsArea: '',
      primaryAddress: ''
    };

    this.serviceUrl = props.serviceUrl;
    this.vendorArray = getVendorArray(this.serviceUrl);
    this.onChange = this.onChange.bind(this);
  }

  createSelectOptionsFromVendors(): JSX.Element[] {
    return this.vendorArray.map((vendor: VendorData): JSX.Element => {
      const key = vendor.vendorId;
      const value = vendor.name;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  onChange(event: any) {
    const vendorId = parseInt(this._vendorId.value, 10);
    const selectedVendor = this.vendorArray.find((vendor: VendorData) => vendor.vendorId === vendorId) as VendorData;

    this.setState({
      ocgNumber: selectedVendor.ocgNumber,
      managingQsArea: selectedVendor.managingQsArea,
      primaryAddress: selectedVendor.primaryAddress
    });
  }

  render() {
    return (
      <Panel header="Vendors" bsStyle="primary">
        <FormGroup controlId="vendorId" bsSize="small">
          <ControlLabel>Vendor Name:</ControlLabel>
          <FormControl componentClass="select" inputRef={ref => { this._vendorId = ref; }} onChange={this.onChange}>
            {this.createSelectOptionsFromVendors()}
          </FormControl>
        </FormGroup>

        <Grid fluid={true}>
          <Row>
            <Col md={6}>
              <FormGroup controlId="ocgNumber" bsSize="small">
                <ControlLabel>OCG Number:</ControlLabel>
                <FormControl type="text" placeholder="OCG Number" readOnly={true} value={this.state.ocgNumber} />
              </FormGroup>

              <FormGroup controlId="managingQsArea" bsSize="small">
                <ControlLabel>Managing QS Area:</ControlLabel>
                <FormControl type="text" placeholder="Managing Qs Area" readOnly={true} value={this.state.managingQsArea} />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="primaryAddress" bsSize="small">
                <ControlLabel>Primary Address:</ControlLabel>
                <FormControl type="text" placeholder="Primary Address" readOnly={true} value={this.state.primaryAddress} />
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Vendor;
