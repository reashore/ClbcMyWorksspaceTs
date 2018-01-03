
export interface ProgramTypeData {
  programTypeId: number;
  programType: string;
}

export function getProgramTypeArray(serviceurl: string): Array<ProgramTypeData> {
  return [
    {
      programTypeId: 1,
      programType: 'Community'
    },
    {
      programTypeId: 2,
      programType: 'Place of Service'
    }
  ];
}
