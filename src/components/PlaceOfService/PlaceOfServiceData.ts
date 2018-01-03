
export interface PlaceOfServiceData {
  placeOfServiceId: number;
  placeOfService: string;
}

export function getPlaceOfServiceArray(serviceUrl: string): Array<PlaceOfServiceData> {
  let placeOfServiceArray: Array<PlaceOfServiceData> = [];
  const numberPlaceOfServices: number = 6;

  for (let n: number = 1; n <= numberPlaceOfServices; n++) {
    let element: PlaceOfServiceData = {
      placeOfServiceId: n,
      placeOfService: `Place of Service ${n}`
    };

    placeOfServiceArray.push(element);
  }

  return placeOfServiceArray;
}
