
// import * as React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// // https://react.rocks/example/react-datepicker

// interface CustomDatePickerState {
//   startDate: string;
// }

// // todo: Fix props type
// class CustomDatePicker extends React.Component<any, CustomDatePickerState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       startDate: moment()
//     };

//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(date: any) {
//     this.setState({
//       startDate: date
//     });
//   }

//   render() {
//     return <DatePicker id="startDate" dateFormat="YYYY/MM/DD" selected={this.state.startDate} onChange={this.onChange} />;
//   }
// }

// export default CustomDatePicker;
