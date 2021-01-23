import React, { createContext, useReducer } from 'react';
import CovidReducer from './CovidReducer';
import { IStatistic } from './Interfaces';


const initialState = {
  statistics:[],
  statisticsSearched:[],
  history:[],
  countries:[]
};

export const CovidContex = createContext<any>(initialState);

export function CovidContexProvider(props: any) {
  const [state, dispatch] = useReducer(CovidReducer, initialState);


  const fetchData = async (type: string, url: string) =>{
    fetch(`https://covid-193.p.rapidapi.com/${url}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '6d779c3a64msh68f29d725ac0d62p12432djsn3f7fd0d27613'
      }
    })
      .then(response => response.json())
      .then(data => dispatch({
        type:`FETCH_DATA_${type.toUpperCase()}`,
        payload: data.response
      }))
      .catch(err => {
        throw new Error(err);
      });
  };

  const searchStatistic = (searchValue: string) =>{
    const statisticSearchedPayload = state.statistics.filter((element: IStatistic)=> (
      element.country===searchValue
    ));
    dispatch({
      type:'SEARCH_STATISTIC',
      payload:statisticSearchedPayload
    });
  };

  return (
    <CovidContex.Provider value={{ statistics: state.statistics, statisticsSearched: state.statisticsSearched, countries: state.countries, history: state.history, fetchData, searchStatistic }}>
      {props.children}
    </CovidContex.Provider>
  );
}
