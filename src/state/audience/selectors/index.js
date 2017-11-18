import { get, values, } from 'lodash';

const getEntireAudience = (state) => {
  return values(get(state, 'audience.entities', {}));
};

export {
  getEntireAudience,
};
