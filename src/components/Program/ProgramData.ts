export interface ServiceSubcategoryData {
  serviceSubcategoryId: number;
  serviceSubcategory: string;
}

export interface FundingModelData {
  fundingModelId: number;
  fundingModel: string;
}

export function getServiceSubcategoryArray(serviceUrl: string): Array<ServiceSubcategoryData> {
  let serviceSubcategoryArray: Array<ServiceSubcategoryData> = [];
  const numberServiceSubcategories: number = 6;

  for (let n: number = 1; n <= numberServiceSubcategories; n++) {
    let element: ServiceSubcategoryData = {
      serviceSubcategoryId: n,
      serviceSubcategory: `Service Subcategory ${n}`
    };

    serviceSubcategoryArray.push(element);
  }

  return serviceSubcategoryArray;
}

export function getFundingModelArray(serviceUrl: string, serviceSubcategory: number): Array<FundingModelData> {
  let fundingModelArray: Array<FundingModelData> = [];
  const numberFundingModels: number = 6;

  for (let n: number = 1; n <= numberFundingModels; n++) {
    let element: FundingModelData = {
      fundingModelId: n,
      fundingModel: `Funding Model ${n} (for Service Subcategory ${serviceSubcategory})`
    };

    fundingModelArray.push(element);
  }

  return fundingModelArray;
}
