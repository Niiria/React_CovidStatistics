import { IStatistics, IAction } from './Interfaces'
;

export default (state: IStatistics, action: IAction) => {
  switch (action.type) {

    case 'FETCH_DATA_STATISTICS':
      return { ...state, statistics: action.payload };
    case 'FETCH_DATA_HISTORY':
      return { ...state, history: action.payload };
    case 'FETCH_DATA_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SEARCH_STATISTIC':
      return { ...state, statisticsSearched: action.payload };
  
      

    default:
      return state;
  }
};
