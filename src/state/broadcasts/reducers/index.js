const initialState = {
  entities: {
    '1': {
      id: '1',
      name: 'Promo on Luxury Bags',
      dateCreated: '2017-11-11',
    },
    '2': {
      id: '2',
      name: 'Promo on Luxury Bags',
      dateCreated: '2017-11-11',
    },
    '3': {
      id: '3',
      name: 'Promo on Luxury Necklaces',
      dateCreated: '2017-11-11',
    },
  },
};

const broadcastsReducer = (state = initialState, action) => {
  return state;
};

export {
  broadcastsReducer,
};
