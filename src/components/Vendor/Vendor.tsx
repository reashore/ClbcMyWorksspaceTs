
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl, FormControlProps } from 'react-bootstrap';
import { VendorData } from './VendorData';
import { getVendorArray } from './VendorDataAccess';
import DataAccess from './../../common/DataAccess';

interface VendorProps {
  serviceUrl: string;
}

interface VendorState {
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export class Vendor extends React.Component<VendorProps, VendorState> {
  private serviceUrl: string;
  private vendorArray: ReadonlyArray<VendorData>;
  private vendorId: HTMLInputElement;
  private dataAccess: DataAccess<VendorData>;

  public constructor(props: VendorProps) {
    super(props);

    this.state = {
      ocgNumber: '',
      managingQsArea: '',
      primaryAddress: ''
    };

    this.serviceUrl = props.serviceUrl;
    this.vendorArray = getVendorArray(this.serviceUrl);
    this.onChange = this.onChange.bind(this);
    this.dataAccess = new DataAccess<VendorData>();
  }

  public render(): JSX.Element {
    return (
      <Panel header="Vendors" bsStyle="primary">
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <FormGroup controlId="vendorId" bsSize="small">
                <ControlLabel>Vendor Name:</ControlLabel>
                <FormControl componentClass="select" inputRef={ref => { this.vendorId = ref; }} onChange={this.onChange}>
                  {this.createSelectOptionsFromVendors()}
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
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

  private createSelectOptionsFromVendors(): JSX.Element[] {
    return this.vendorArray.map((vendor: VendorData): JSX.Element => {
      const key: number = vendor.vendorId;
      const value: string = vendor.name;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  private onChange(event: React.FormEvent<FormControlProps>) {
    const vendorId = parseInt(this.vendorId.value, 10);
    const predicate = (vendor: VendorData): boolean => vendor.vendorId === vendorId;
    const selectedVendor = this.vendorArray.find(predicate) as VendorData;

    this.setState({
      ocgNumber: selectedVendor.ocgNumber,
      managingQsArea: selectedVendor.managingQsArea,
      primaryAddress: selectedVendor.primaryAddress
    });
  }
}
