export interface IMeasure {
  id?: string;
  name: string;
  actualValues?: any;
  weight: number;
  description: string | undefined;
  red: string | undefined;
  goal: string | undefined;
  dataType: string | undefined;
  calendar: string | undefined;
  createDate?: string;
  objectiveId?: string;
}

export type MeasureDTO = {
  data: IMeasure;
  details: {
    message: string;
  };
};

export type MeasuresDTO = {
  data: IMeasure[];
  details: {
    message: string;
  };
};

export type AssignedMeasuresDTO = {
  data: IMeasure[];
  details: {
    message: string;
  };
};
