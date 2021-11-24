export interface IScorecard {
  id: string;
  name: string;
  type: string;
  description: string;
  createDate: string;
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
