export type FreezeType = {
  json: Freeze[];
};

export interface Freeze {
  name: string;
  status: string;
  time: number;
  dependencia: string;
  floor: string;
  section: string;
}
