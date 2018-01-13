
import * as React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl, FormControlProps } from 'react-bootstrap';
import ProgramType from '../ProgramType/ProgramType';
import ServiceSubcategoryData from './ServiceSubcategoryData';
import FundingModelData from './FundingModelData';
import { DataAccess, handleError } from '../../common/DataAccess';
import webServices from '../../WebServicesConfiguration';

interface ProgramProps {
  serviceSubcategoryServiceUrl: string;
  fundingModelServiceUrl: string;
}

interface ProgramState {
  programName: string | undefined;
  description: string | undefined;
  serviceSubcategoryData: ReadonlyArray<ServiceSubcategoryData> | null;
  fundingModelData: ReadonlyArray<FundingModelData> | null;
}

export default class Program extends React.Component<ProgramProps, ProgramState> {
  private serviceSubcategoryServiceUrl: string;
  private fundingModelServiceUrl: string;
  private serviceSubcategoryId: HTMLInputElement;
  private serviceSubcategoryDataAccess: DataAccess<ServiceSubcategoryData>;
  private fundingModelDataAccess: DataAccess<FundingModelData>;

  public constructor(props: ProgramProps) {
    super(props);

    this.state = {
      programName: '',
      description: '',
      serviceSubcategoryData: null,
      fundingModelData: null
    };

    this.serviceSubcategoryServiceUrl = props.serviceSubcategoryServiceUrl;
    this.fundingModelServiceUrl = props.fundingModelServiceUrl;
    this.serviceSubcategoryDataAccess = new DataAccess<ServiceSubcategoryData>();
    this.fundingModelDataAccess = new DataAccess<FundingModelData>();

    this.onChangeServiceSubcategory = this.onChangeServiceSubcategory.bind(this);
  }

  public componentDidMount(): void {
    if (!this.state.serviceSubcategoryData) {
      this.serviceSubcategoryDataAccess.getData(this.serviceSubcategoryServiceUrl)
        .then((data: ReadonlyArray<ServiceSubcategoryData>) => this.setState({ serviceSubcategoryData: data }))
        .catch(handleError);
    }
  }

  public render(): JSX.Element {
    if (this.state.serviceSubcategoryData === null) {
      return (
        <div>Loading...</div>
      );
    } else if (this.state.serviceSubcategoryData.length === 0) {
      return (
        <div>No data</div>
      );
    } else {
      let foo = this.state.fundingModelData as ReadonlyArray<FundingModelData>;
      return this.renderProgramForm(this.state.serviceSubcategoryData, foo);
    }
  }

  private renderProgramForm(serviceSubcategoryArray: ReadonlyArray<ServiceSubcategoryData>, fundingModelArray: ReadonlyArray<FundingModelData>): JSX.Element {
    return (
      <Panel header="Program" bsStyle="primary">
        <Grid fluid={true}>
          <Row>
            <Col md={6}>
              <FormGroup controlId="programNameTextbox" bsSize="small">
                <ControlLabel>Program Name:</ControlLabel>
                <FormControl type="text" name="programName" required={true} placeholder="Program Name" />
              </FormGroup>
              <FormGroup controlId="descriptionTextbox" bsSize="small">
                <ControlLabel>Description:</ControlLabel>
                <FormControl componentClass="textarea" name="description" rows={2} required={true} placeholder="Description" />
              </FormGroup>
              <FormGroup controlId="startDate" bsSize="small">
                <ControlLabel>Start Date:</ControlLabel>
                <FormControl type="date" name="startDate" required={true} placeholder="Start Date" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="serviceSubcategoryDropDownList" bsSize="small">
                <ControlLabel>Service Subcategory:</ControlLabel>
                <FormControl componentClass="select" inputRef={(ref: HTMLInputElement): void => {this.serviceSubcategoryId = ref; }} onChange={this.onChangeServiceSubcategory} >
                  {this.createSelectOptionsFromServiceSubcategories(serviceSubcategoryArray)}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="fundingModelDropDownList" bsSize="small">
                <ControlLabel>Funding Model:</ControlLabel>
                <FormControl componentClass="select">
                  {this.createSelectOptionsFromFundingModels(fundingModelArray)}
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ProgramType serviceUrl={webServices.programTypesUrl} />
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }

  private createSelectOptionsFromServiceSubcategories(serviceSubcategoryArray: ReadonlyArray<ServiceSubcategoryData>): JSX.Element[] {
    return serviceSubcategoryArray.map(
      (serviceSubcategory: ServiceSubcategoryData): JSX.Element => {
        const key: number = serviceSubcategory.serviceSubcategoryId;
        const value: string = serviceSubcategory.name;
        return (
          <option key={key} value={key}>
            {value}
          </option>
        );
      }
    );
  }

  private createSelectOptionsFromFundingModels(fundingModelArray: ReadonlyArray<FundingModelData>): JSX.Element[] {
    if (fundingModelArray === null) {
      return ([<option key={1} value="">Select a funding model</option>]);
    }

    return fundingModelArray.map(
      (fundingModel: FundingModelData): JSX.Element => {
        const key: number = fundingModel.fundingModelId;
        const value: string = fundingModel.name;
        return (
          <option key={key} value={key}>
            {value}
          </option>
        );
      }
    );
  }

  // For event handler signature, see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
  private onChangeServiceSubcategory(event: React.FormEvent<FormControlProps>): void {
    // let formValue: number | string | string[] | undefined = event.currentTarget.value;
    // console.log(formValue);
    const serviceSubcategoryId = parseInt(this.serviceSubcategoryId.value, 10);
    let url = `${this.fundingModelServiceUrl}/${serviceSubcategoryId}`;
    this.fundingModelDataAccess.getData(url)
      .then((data: ReadonlyArray<FundingModelData>) => this.setState({ fundingModelData: data }))
      .catch(handleError);

    this.forceUpdate();
  }
}
