import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "./actionTypes";
import ratesActions from "./ratesActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../apolloClient", () => ({
  query: () =>
    new Promise((resolve) => {
      resolve({ data: { data: "Some test data" } });
    }),
}));

test("test load rates sucess", () => {
  const store = mockStore({});

  const expectedActions = [
    { type: types.API_LOADING, loading: true },
    { type: types.LOAD_RATES_SUCESS, data: "Some test data" },
    { type: types.API_LOADING, loading: false },
  ];

  store.dispatch(ratesActions()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
