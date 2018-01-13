
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import PlaceOfService from '../PlaceOfService/PlaceOfService';
import Community from '../Community/Community';
import ProgramTypeData from '../ProgramType/ProgramTypeData';
import { DataAccess, handleError } from '../../common/DataAccess';
import webServices from '../../WebServicesConfiguration';

interface ProgramTypeProps {
  serviceUrl: string;
}

interface ProgramTypeState {
  data: ReadonlyArray<ProgramTypeData> | null;
}

export default class ProgramType extends React.Component<ProgramTypeProps, ProgramTypeState> {
  private serviceUrl: string;
  private dataAccess: DataAccess<ProgramTypeData>;

  public constructor(props: ProgramTypeProps) {
    super(props);

    this.state = {
      data: null
    };

    this.serviceUrl = props.serviceUrl;
    this.dataAccess = new DataAccess<ProgramTypeData>();   
  }

  public componentDidMount(): void {
    if (!this.state.data) {
          this.dataAccess.getData(this.serviceUrl)
              .then((data: ReadonlyArray<ProgramTypeData>) => this.setState({ data: data }))
              .catch(handleError);
      }
  }
  public render(): JSX.Element {
    if (this.state.data === null) {
      return (
        <div>Loading...</div>
      );
    } else if (this.state.data.length === 0) {
      return (
        <div>No data</div>
      );
    } else {
      return this.renderProgramTypeForm(this.state.data);
    }
  }

  private renderProgramTypeForm(programTypeArray: ReadonlyArray<ProgramTypeData>): JSX.Element {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <FormGroup controlId="programTypeDropDownList" bsSize="small">
              <ControlLabel>Program Type:</ControlLabel>
              <FormControl componentClass="select">
                {this.createSelectOptionsFromProgramTypes(programTypeArray)}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Community serviceUrl={webServices.cpdAreasUrl} />
          </Col>
          <Col md={6}>
            <PlaceOfService serviceUrl={webServices.placeOfServicesUrl} />
          </Col>
        </Row>
      </Grid>
    );
  } 

  private createSelectOptionsFromProgramTypes(programTypeArray: ReadonlyArray<ProgramTypeData>): JSX.Element[]  {
    return programTypeArray.map((programType: ProgramTypeData): JSX.Element => {
      const key: number = programType.programTypeId;
      const value: string = programType.name;
      return <option key={key} value={key} >{value}</option>; 
    });
  }
}
