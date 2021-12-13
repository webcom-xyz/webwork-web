export interface IScorecard {
  id?: string;
  name: string | undefined;
  type?: string;
  description: string | undefined;
  createDate?: string;
}

export type ScorecardDTO = {
  data: IScorecard;
  details: {
    message: string;
  };
};

export type ScorecardsDTO = {
  data: IScorecard[];
  details: {
    message: string;
  };
};

export type ScorecardParams = {
  scorecardId: string;
};
