
// // import DataAccess from '../../common/DataAccess';
// import { VendorData } from './VendorData';

// // export function getVendorArray(url: string): ReadonlyArray<VendorData> {
// //   let vendorsArray: Array<VendorData> = [];

// //   // const dataAccess = new DataAccess<VendorData>();
// //   // dataAccess.getData(url);

// //   // const numberVendors: number = 6;
// //   // for (let n: number = 1; n <= numberVendors; n++) {
// //   //   let element: VendorData = {
// //   //     vendorId: n,
// //   //     name: `Vendor Name ${n}`,
// //   //     ocgNumber: `OCG Number ${n} `,
// //   //     managingQsArea: `Managing QS Area ${n}`,
// //   //     primaryAddress: `Primary Address ${n}`
// //   //   };

// //   //   vendorsArray.push(element);
// //   // }

// //   return vendorsArray as ReadonlyArray<VendorData>;
// // }

// export function getVendorArray(serviceUrl: string): ReadonlyArray<VendorData> {
//   let vendorsArray: Array<VendorData> = [];
//   const numberVendors: number = 6;

//   for (let n: number = 1; n <= numberVendors; n++) {
//     let element: VendorData = {
//       vendorId: n,
//       name: `Vendor Name ${n}`,
//       ocgNumber: `OCG Number ${n} `,
//       managingQsArea: `Managing QS Area ${n}`,
//       primaryAddress: `Primary Address ${n}`
//     };

//     vendorsArray.push(element);
//   }

//   return vendorsArray as ReadonlyArray<VendorData>;
// }
