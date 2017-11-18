import { get, values, } from 'lodash';

const getSequences = (state) => {
  return values(get(state, 'sequences.entities', {}));
};

export {
  getSequences,
};
  