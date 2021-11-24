export interface IKPI {
  id: string;
  name: string;
  actualValues?: any;
  weight: number;
  description: string;
  red: string;
  goal: string;
  dataType: string;
  calendar: string;
  createDate: string;
}

export type AssignedKPIsDTO = {
  data: IKPI[];
  details: {
    message: string;
  }
}