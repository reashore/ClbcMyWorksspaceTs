
import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { PlaceOfService } from '../PlaceOfService/PlaceOfService';
import { Community } from '../Community/Community';
import { ProgramTypeData, getProgramTypeArray } from '../ProgramType/ProgramTypeData';

interface PlaceofServiceProps {
  serviceUrl: string;
}

export class ProgramType extends React.Component<PlaceofServiceProps, {}> {
  private serviceUrl: string;
  private programTypes: Array<ProgramTypeData>;

  public constructor(props: PlaceofServiceProps) {
    super(props);

    this.serviceUrl = props.serviceUrl;
    this.programTypes = getProgramTypeArray(this.serviceUrl);
  }

  public render(): JSX.Element {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <FormGroup controlId="programTypeId" bsSize="small">
              <ControlLabel>Program Type:</ControlLabel>
              <FormControl componentClass="select">
                {this.createSelectOptionsFromProgramTypes(this.programTypes)}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Community serviceUrl="http://localhost/api/cpdAreas" />
          </Col>
          <Col md={6}>
            <PlaceOfService serviceUrl="http://localhost/api/placeofservices" />
          </Col>
        </Row>
      </Grid>
    );
  }

  private createSelectOptionsFromProgramTypes(programTypeArray: Array<ProgramTypeData>): JSX.Element[]  {
    return programTypeArray.map((programType: ProgramTypeData): JSX.Element => {
      const key: number = programType.programTypeId;
      const value: string = programType.programType;
      return <option key={key} value={key} >{value}</option>; 
    });
  }
}
