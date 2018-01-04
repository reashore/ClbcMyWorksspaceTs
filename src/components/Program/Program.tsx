
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl, FormControlProps } from 'react-bootstrap';
import { ProgramType } from '../ProgramType/ProgramType';
// import CustomDatePicker from '../../common/CustomDatePicker';
import { getServiceSubcategoryArray, getFundingModelArray, ServiceSubcategoryData, FundingModelData } from './ProgramData';

interface ProgramProps {
  serviceSubcategoryServiceUrl: string;
  fundingModelServiceUrl: string;
}

interface ProgramState {
  programName: string | undefined;
  description: string | undefined;
}

export class Program extends React.Component<ProgramProps, ProgramState> {
  private serviceSubcategoryServiceUrl: string;
  private fundingModelServiceUrl: string;
  private serviceSubcategories: ServiceSubcategoryData[];
  private fundingModels: FundingModelData[];
  private serviceSubcategoryId: HTMLInputElement;

  constructor(props: ProgramProps) {
    super(props);

    this.state = {
      programName: '',
      description: ''
    };

    this.serviceSubcategoryServiceUrl = props.serviceSubcategoryServiceUrl;
    this.fundingModelServiceUrl = props.fundingModelServiceUrl;
    this.serviceSubcategories = getServiceSubcategoryArray(this.serviceSubcategoryServiceUrl);
    this.fundingModels = getFundingModelArray(this.fundingModelServiceUrl, 1);

    this.onChangeServiceSubcategory = this.onChangeServiceSubcategory.bind(this);
    // this.onChangeProgramName = this.onChangeProgramName.bind(this);
  }

  createSelectOptionsFromServiceSubcategories(serviceSubcategoryArray: Array<ServiceSubcategoryData>): JSX.Element[] {
    return serviceSubcategoryArray.map((serviceSubcategory: ServiceSubcategoryData): JSX.Element => {
      const key: number = serviceSubcategory.serviceSubcategoryId;
      const value: string = serviceSubcategory.serviceSubcategory;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  createSelectOptionsFromFundingModels(fundingModelArray: Array<FundingModelData>): JSX.Element[] {
    return fundingModelArray.map((fundingModel: FundingModelData): JSX.Element => {
      const key: number = fundingModel.fundingModelId;
      const value: string = fundingModel.fundingModel;
      return <option key={key} value={key}>{value}</option>;
    });
  }

  // // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  onChangeServiceSubcategory(event: React.FormEvent<FormControlProps>): void {
    let formValue: string | number | string[] | undefined = event.currentTarget.value;
    // tslint:disable-next-line:no-console
    console.log(formValue);
    const serviceSubcategoryId = parseInt(this.serviceSubcategoryId.value, 10);
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

  render(): JSX.Element {
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
                {/* <CustomDatePicker /> */}
                <FormControl type="date" name="startDate" required={true} placeholder="Start Date" />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="serviceSubcategoryId" bsSize="small">
                <ControlLabel>Service Subcategory:</ControlLabel>
                <FormControl componentClass="select" inputRef={ref => { this.serviceSubcategoryId = ref; }} onChange={this.onChangeServiceSubcategory}>
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
