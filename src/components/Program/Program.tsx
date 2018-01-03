
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ProgramType from '../ProgramType/ProgramType';
import CustomDatePicker from '../../common/CustomDatePicker';
import { getServiceSubcategoryArray, getFundingModelArray, ServiceSubcategoryData, FundingModelData } from './ProgramData';

export interface ProgramProps {
  serviceSubcategoryServiceUrl: string;
  fundingModelServiceUrl: string;
}

export class Program extends React.Component<ProgramProps, {}> {
  private serviceSubcategoryServiceUrl: string;
  private fundingModelServiceUrl: string;
  private serviceSubcategories: ServiceSubcategoryData[];
  private fundingModels: FundingModelData[];
  private _serviceSubcategoryId: HTMLInputElement;

  constructor(props: ProgramProps) {
    super(props);

    // this.state = {
    //   programName: undefined,
    //   description: ""
    // }

    this.serviceSubcategoryServiceUrl = props.serviceSubcategoryServiceUrl;
    this.fundingModelServiceUrl = props.fundingModelServiceUrl;
    this.serviceSubcategories = getServiceSubcategoryArray(this.serviceSubcategoryServiceUrl);
    this.fundingModels = getFundingModelArray(this.fundingModelServiceUrl, 1);

    this.onChangeServiceSubcategory = this.onChangeServiceSubcategory.bind(this);
    // this.onChangeProgramName = this.onChangeProgramName.bind(this);
  }

  // todo: Fix return type
  createSelectOptionsFromServiceSubcategories(serviceSubcategoryArray: Array<ServiceSubcategoryData>): any {
    return serviceSubcategoryArray.map((serviceSubcategory: ServiceSubcategoryData) => {
      const key: number = serviceSubcategory.serviceSubcategoryId;
      const value: string = serviceSubcategory.serviceSubcategory;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // todo: Fix return type
  createSelectOptionsFromFundingModels(fundingModelArray: Array<FundingModelData>): any {
    return fundingModelArray.map(fundingModel => {
      const key = fundingModel.fundingModelId;
      const value = fundingModel.fundingModel;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  onChangeServiceSubcategory(event: any) {
    const serviceSubcategoryId = parseInt(this._serviceSubcategoryId.value, 10);
    this.fundingModels = getFundingModelArray(this.fundingModelServiceUrl, serviceSubcategoryId);
    this.forceUpdate();
  }

  // getProgramNameValidationState() {
  //   const length = this.state.programName.length;
  //   return (length === 0) ? 'error' : 'success';
  // }

  // onChangeProgramName(event) {
  //   this.setState({ programName: event.target.value });
  // }

  render() {
    return (
      <Panel header="Program" bsStyle="primary">
        <Grid fluid={true}>
          <Row>
            <Col md={6}>
              {/* <FormGroup controlId="programName" bsSize="small" validationState={this.getProgramNameValidationState()} >
                <ControlLabel>Program Name:</ControlLabel>
                <FormControl type="text" name="programName" required placeholder="Program Name"
                        value={this.state.programName} onChange={this.onChangeProgramName} />
              </FormGroup> */}

              <FormGroup controlId="programName" bsSize="small">
                <ControlLabel>Program Name:</ControlLabel>
                <FormControl type="text" name="programName" required={true} placeholder="Program Name" />
              </FormGroup>

              <FormGroup controlId="description" bsSize="small">
                <ControlLabel>Description:</ControlLabel>
                <FormControl componentClass="textarea" name="description" rows={2} required={true} placeholder="Description" />
              </FormGroup>

              <FormGroup controlId="startDate" bsSize="small">
                <ControlLabel>Start Date (YYYY/MM/DD):</ControlLabel>
                <CustomDatePicker />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="serviceSubcategoryId" bsSize="small">
                <ControlLabel>Service Subcategory:</ControlLabel>
                <FormControl componentClass="select" inputRef={ref => { this._serviceSubcategoryId = ref; }} onChange={this.onChangeServiceSubcategory}>
                  {this.createSelectOptionsFromServiceSubcategories(this.serviceSubcategories)}
                </FormControl>
              </FormGroup>

              <FormGroup controlId="fundingModelId" bsSize="small">
                <ControlLabel>Funding Model:</ControlLabel>
                <FormControl componentClass="select">
                  {this.createSelectOptionsFromFundingModels(this.fundingModels)}
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
        </Grid>

        <ProgramType serviceUrl="http://localhost/api/programtypes" />
      </Panel>
    );
  }
}
