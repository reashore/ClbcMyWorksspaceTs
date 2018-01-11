
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl, FormControlProps } from 'react-bootstrap';
import VendorData from './VendorData';
import { DataAccess, handleError } from './../../common/DataAccess';

interface VendorProps {
  serviceUrl: string;
}

interface VendorState {
  data: ReadonlyArray<VendorData> | null;
  vendorId: number | undefined;
}

export class Vendor extends React.Component<VendorProps, VendorState> {
  private serviceUrl: string;
  private dataAccess: DataAccess<VendorData>;
  private vendorDropDownList: HTMLInputElement;

  public constructor(props: VendorProps) {
    super(props);

    this.state = {
      data: null,
      vendorId: undefined,
    };

    this.serviceUrl = props.serviceUrl;
    this.dataAccess = new DataAccess<VendorData>();

    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount(): void {
    if (!this.state.data) {
          this.dataAccess.getData(this.serviceUrl)
              .then((data: ReadonlyArray<VendorData>) => {
                let vendorId;

                if (data.length === 0) {
                  vendorId = undefined;
                } else {
                  vendorId = data[0].vendorId;
                }

                this.setState({ 
                  data: data, 
                  vendorId: vendorId
                });                  
              })
              .catch(handleError);
      }
  }

  public render(): JSX.Element {
    if (this.state.data === null) {
      return (
        <Panel header="Vendors" bsStyle="primary">
          <div>Loading...</div>
        </Panel>
      );
    } else if (this.state.data.length === 0) {
      return (
        <Panel header="Vendors" bsStyle="danger">
          <div>No data</div>
        </Panel>
      );
    } else {
      // If state.data is not null or zero-length, 
      // then vendorId must be defined and hence casting to number is valid
      const vendorId = this.state.vendorId as number;
      return this.displayVendorForm(this.state.data, vendorId);
    }
  }

  private displayVendorForm(dataArray: ReadonlyArray<VendorData>, vendorId: number): JSX.Element {
    const predicate = (vendor: VendorData): boolean => vendor.vendorId === vendorId;
    const selectedVendor = dataArray.find(predicate) as VendorData;
    const {ocgNumber, managingQsArea, primaryAddress}  = selectedVendor;

    return (
      <Panel header="Vendors" bsStyle="primary">
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <FormGroup controlId="vendorDropDownList" bsSize="small">
                <ControlLabel>Vendor Name:</ControlLabel>
                <FormControl componentClass="select" inputRef={ref => { this.vendorDropDownList = ref; }} onChange={this.onChange}>
                  {this.createSelectOptionsFromVendors(dataArray)}
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup controlId="ocgNumberTextBox" bsSize="small">
                <ControlLabel>OCG Number:</ControlLabel>
                <FormControl type="text" placeholder="OCG Number" readOnly={true} value={ocgNumber} />
              </FormGroup>
              <FormGroup controlId="managingQsAreaTextbox" bsSize="small">
                <ControlLabel>Managing QS Area:</ControlLabel>
                <FormControl type="text" placeholder="Managing Qs Area" readOnly={true} value={managingQsArea} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="primaryAddressTextbox" bsSize="small">
                <ControlLabel>Primary Address:</ControlLabel>
                <FormControl type="text" placeholder="Primary Address" readOnly={true} value={primaryAddress} />
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }

  private createSelectOptionsFromVendors(dataArray: ReadonlyArray<VendorData>): JSX.Element[] {
    return dataArray.map((vendor: VendorData): JSX.Element => {
      const key: number = vendor.vendorId;
      const value: string = vendor.name;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // For event signature, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  private onChange(event: React.FormEvent<FormControlProps>) {
    const vendorId = parseInt(this.vendorDropDownList.value, 10);

    this.setState({
      vendorId: vendorId
    });
  }
}
