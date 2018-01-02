import * as React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
// import Vendor from '../components/Vendor/Vendor';
// import Vendor from 'vendor-component';
// import Program from '../components/Program/Program';

// const CreateProgramPage = () => (
//   <div>
//     <Jumbotron>
//       <h1>Create Program Page</h1>
//       <p>
//         A simple jumbotron-style component for calling extra attention to
//         featured content or information.
//       </p>
//       <p>
//         <Button bsStyle="primary">Learn more</Button>
//       </p>
//     </Jumbotron>

//     <Panel header="Page 1" bsStyle="primary">
//       <h2>Page 1</h2>
//     </Panel>
//   </div>
// );

class CreateProgramPage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Create Program Page</h1>
          <p>
            A simple jumbotron-style component for calling extra attention to
            featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

// class CreateProgramPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(event) {
//     event.preventDefault();

//     const program = this.getProgramValues();
//     const message = this.formatProgramValues(program);

//     alert(message);
//   }

//   getProgramValues() {
//     const createProgramForm = document.forms.createProgramForm;

//     const program = {
//       programId: 12345,
//       programName: createProgramForm.programName.value,
//       description: createProgramForm.description.value,
//       startDate: createProgramForm.startDate.value,
//       fundingModelId: createProgramForm.fundingModelId.value,
//       vendorId: createProgramForm.vendorId.value,
//       serviceSubcategoryId: createProgramForm.serviceSubcategoryId.value,
//       programTypeId: createProgramForm.programTypeId.value,
//       cpdAreaId: createProgramForm.cpdAreaId.value,
//       placeOfServiceId: createProgramForm.placeOfServiceId.value
//     };

//     return program;
//   }

//   formatProgramValues(program) {
//     let message = "Program values:\n\n";

//     message += `Program Id = ${program.programId},\n`;
//     message += `Program Name = ${program.programName},\n`;
//     message += `Description = ${program.description},\n`;
//     message += `Start Date = ${program.startDate},\n`;
//     message += `Vendor Id = ${program.vendorId},\n`;
//     message += `Service Subcategory Id = ${program.serviceSubcategoryId},\n`;
//     message += `Funding Model Id = ${program.fundingModelId},\n`;
//     message += `Program Type Id = ${program.programTypeId},\n`;
//     message += `CPD Area Id = ${program.cpdAreaId},\n`;
//     message += `Place Of Service Id = ${program.placeOfServiceId}`;

//     return message;
//   }

//   render() {
//     return (
//       <Form id="createProgramForm" onSubmit={this.onSubmit}>
//         <h2>Create Program</h2>
//         <Vendor serviceUrl="http://localhost:3001/api/vendors" />
//         <Program
//           serviceSubcategoryServiceUrl="http://localhost:3001/api/serviceSubcategory"
//           fundingModelServiceUrl="http://localhost:3001/api/fundingModels"/>
//         <Button type="submit" bsStyle="primary" bsSize="small">Save Program</Button>
//       </Form>
//     );
//   }
// }

export default CreateProgramPage;
