export type FirebasetData = {
  json?: Freeze[];
  tanque?: string;
};

export interface Freeze {
  name: string;
  status: string;
  time: number;
  dependencia: string;
  floor: string;
  section: string;
}
