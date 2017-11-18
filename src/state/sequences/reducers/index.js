const initialState = {
  entities: {
    '1': {
      id: '1',
      name: 'First-time Buyers Post-purchase',
      dateCreated: '2017-11-11',
    },
    '2': {
      id: '2',
      name: 'Loyal Buyers (2nd+ purchase) Post-purchase',
      dateCreated: '2017-11-11',
    },
    '3': {
      id: '3',
      name: 'Cart abandonment',
      dateCreated: '2017-11-11',
    },
  },
};

const sequencesReducer = (state = initialState, action) => {
  return state;
};

export {
  sequencesReducer,
};
