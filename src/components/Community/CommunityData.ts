
export interface CpdAreaData {
  cpdAreaId: number;
  cpdArea: string;
}

export function getCpdAreaArray(serviceUrl: string): Array<CpdAreaData> {
  let cpdAreaArray: Array<CpdAreaData> = [];
  const numberCpdAreas: number = 6;

  for (let n: number = 1; n <= numberCpdAreas; n++) {
    let element: CpdAreaData = {
      cpdAreaId: n,
      cpdArea: `CPD Area ${n}`
    };

    cpdAreaArray.push(element);
  }

  return cpdAreaArray;
}
