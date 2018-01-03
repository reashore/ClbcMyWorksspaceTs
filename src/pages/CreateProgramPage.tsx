
import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import Vendor from '../components/Vendor/Vendor';
// import Vendor from 'vendor-component';
import { Program } from '../components/Program/Program';

interface ProgramData {
  programId: number;
  programName: string;
  description: string;
  startDate: string;
  fundingModelId: string;
  vendorId: string;
  serviceSubcategoryId: string;
  programTypeId: string;
  cpdAreaId: string;
  placeOfServiceId: string;
}

class CreateProgramPage extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(event: React.FormEvent<HTMLButtonElement>): void {
  // onSubmit(event: React.FormEvent<HTMLFormElement>): void {
  onSubmit(event: any): void {
    event.preventDefault();

    const program: ProgramData = this.getProgramValues();
    const message: string = this.formatProgramValues(program);

    alert(message);
  }

  getProgramValues(): ProgramData {
    const createProgramForm: HTMLFormElement = document.getElementById('createProgramForm') as HTMLFormElement;

    const program = {
      programId: 12345,
      programName: createProgramForm.programName.value,
      description: createProgramForm.description.value,
      startDate: createProgramForm.startDate.value,
      fundingModelId: createProgramForm.fundingModelId.value,
      vendorId: createProgramForm.vendorId.value,
      serviceSubcategoryId: createProgramForm.serviceSubcategoryId.value,
      programTypeId: createProgramForm.programTypeId.value,
      cpdAreaId: createProgramForm.cpdAreaId.value,
      placeOfServiceId: createProgramForm.placeOfServiceId.value
    };

    return program;
  }

  formatProgramValues(program: ProgramData): string {
    let message: string = 'Program values:\n\n';

    message += `Program Id = ${program.programId},\n`;
    message += `Program Name = ${program.programName},\n`;
    message += `Description = ${program.description},\n`;
    message += `Start Date = ${program.startDate},\n`;
    message += `Vendor Id = ${program.vendorId},\n`;
    message += `Service Subcategory Id = ${program.serviceSubcategoryId},\n`;
    message += `Funding Model Id = ${program.fundingModelId},\n`;
    message += `Program Type Id = ${program.programTypeId},\n`;
    message += `CPD Area Id = ${program.cpdAreaId},\n`;
    message += `Place Of Service Id = ${program.placeOfServiceId}`;

    return message;
  }

  render() {
    return (
      <Form id="createProgramForm" onSubmit={this.onSubmit}>
        <h2>Create Program</h2>
        <Vendor serviceUrl="http://localhost:3001/api/vendors" />
        <Program
          serviceSubcategoryServiceUrl="http://localhost:3001/api/serviceSubcategory"
          fundingModelServiceUrl="http://localhost:3001/api/fundingModels"
        />
        <Button type="submit" bsStyle="primary" bsSize="small">
          Save Program
        </Button>
      </Form>
    );
  }
}

export default CreateProgramPage;