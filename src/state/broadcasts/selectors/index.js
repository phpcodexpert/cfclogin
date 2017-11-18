import { get, values, } from 'lodash';

const getBroadcasts = (state) => {
  return values(get(state, 'broadcasts.entities', {}));
};

export {
  getBroadcasts,
};
