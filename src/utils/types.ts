export type TrackItemType = {
  id?: number;
  name: string;
  active?: boolean;
  time?: number;
  rate: number;
  outputs: TrackOutputsDto[];
  currency: string;
};

type TrackOutputsDto = {
  start: Date;
  end?: Date;
};
