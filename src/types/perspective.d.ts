export interface IPerspective {
  id?: string;
  name: string | undefined;
  weight: number | undefined;
  description: string | undefined;
  scorecardId?: string;
  createDate?: string;
}


export type PerspectiveDTO = {
  data: IPerspective;
  details: {
    message: string;
  };
};


export type PerspectivesDTO = {
  data: IPerspective[];
  details: {
    message: string;
  };
};
