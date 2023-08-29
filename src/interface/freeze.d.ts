export type FreezeType = {
  json: Freeze[];
};

export interface Freeze {
  name: string;
  status: string;
  time: number;
  floor: string;
  section: string;
}
