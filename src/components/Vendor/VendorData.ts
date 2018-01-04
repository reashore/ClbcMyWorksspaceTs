// import * as IsoFetch from 'isomorphic-fetch';
// import { _fetch } from 'isomorphic-fetch';
// import _fetch from 'isomorphic-fetch';
import 'isomorphic-fetch';

export interface VendorData {
  vendorId: number;
  name: string;
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export function getVendorArray(serviceUrl: string): ReadonlyArray<VendorData> {
  let vendorsArray: Array<VendorData> = [];
  const numberVendors: number = 6;

  // fetch('localhost:3001/api/vendors')
  //   .then(function(response: any) {
  //       if (response.status >= 400) {
  //           throw new Error('Bad response from server');
  //       }

  //       // tslint:disable-next-line:no-console
  //       console.log(response);
  //       // return response.json();
  //   })
  //   .catch(function(error: any) {
  //       // tslint:disable-next-line:no-console
  //       console.log(error);
  //   });


  for (let n: number = 1; n <= numberVendors; n++) {
    let element: VendorData = {
      vendorId: n,
      name: `Vendor Name ${n}`,
      ocgNumber: `OCG Number ${n} `,
      managingQsArea: `Managing QS Area ${n}`,
      primaryAddress: `Primary Address ${n}`
    };

    vendorsArray.push(element);
  }

  return vendorsArray as ReadonlyArray<VendorData>;
}

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
