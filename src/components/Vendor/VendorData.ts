
export interface VendorData {
  vendorId: number;
  name: string;
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export function getVendorArray(serviceUrl: string): Array<VendorData> {
  let vendorsArray: Array<VendorData> = [];
  const numberVendors: number = 6;

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

  return vendorsArray;
}
