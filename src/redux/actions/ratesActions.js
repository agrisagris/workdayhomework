import { gql } from "@apollo/client";

import * as types from "./actionTypes";
import client from "../apolloClient";

const query = gql`
  query Rates {
    data @rest(type: "Rates", path: "rates") {
      date
      base
      rates
    }
  }
`;

export const loadRates = () => (dispatch) => {
  dispatch({ type: types.API_LOADING, loading: true });

  return client
    .query({
      query,
      errorPolicy: "all",
    })
    .then((response) => {
      if (response?.data?.data) {
        dispatch({ type: types.LOAD_RATES_SUCESS, data: response.data.data });
      } else {
        throw new Error("No data returned by API");
      }
    })
    .catch(() => {
      // log error somewhere
      dispatch({ type: types.API_ERROR, error: true });
    })
    .finally(() => {
      dispatch({ type: types.API_LOADING, loading: false });
    });
};

export default loadRates;
