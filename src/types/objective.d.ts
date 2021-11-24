export interface IObjective {
    id?: string;
    name: string | undefined;
    weight: number | undefined;
    description: string | undefined;
    perspectiveId?: string;
    createDate?: string;
  }
  
  export type ObjectivesDTO = {
    data: IObjective[];
    details: {
      message: string;
    };
  };
  