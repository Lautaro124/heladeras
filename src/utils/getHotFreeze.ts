import type { Freeze } from '../interface/freeze';

export const getHotFreeze = (freezes: Freeze[]) => {
  return freezes.filter(({ status }) => {
    const temperature = parseInt(status, 10);
    return temperature >= 10;
  });
};
