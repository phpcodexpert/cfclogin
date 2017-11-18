const initialState = {
  entities: {
    '1': {
      id: '1',
      name: 'Anna Liorame',
      tags: [ 'Mommy', 'Lulz' ],
    },
    '2': {
      id: '2',
      name: 'John Power',
      tags: [ 'Daddy', 'Lulz' ],
    },
  },
};

const audienceReducer = (state = initialState, action) => {
  return state;
};

export {
  audienceReducer,
};
