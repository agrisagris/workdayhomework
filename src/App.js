import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as ratesActions from "./redux/actions/ratesActions";
import ratesSelector from "./redux/selectors/ratesSelector";
import RatesTable from "./components/RatesTable";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const rates = useSelector(ratesSelector);

  const onLoadRates = () => {
    dispatch(ratesActions.loadRates());
  };
  return (
    <>
      <div>Here be dragons</div>
      <button type="button" onClick={onLoadRates}>
        Load Rates
      </button>
      <RatesTable rates={rates} />
    </>
  );
}
