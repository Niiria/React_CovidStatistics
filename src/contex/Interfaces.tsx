
export interface IStatistics{
  statistics:IStatistic[],
  statisticsSearched:IStatistic[],
  history:IStatistic[],
  countries:IStatistic[]
}

export interface IAction{
  type: string,
  payload: IStatistic[]
}

export interface IStatistic{
  cases: IStatisticCases
  continent: string
  country: string
  day: string
  deaths: IStatisticDeaths
  population: number
  tests: IStatisticTests
  time: string
}

export interface IStatisticCases{
  M_pop: string,
  active: number,
  critical: number,
  new: number,
  recovered: number,
  total: number,
}
export interface IStatisticDeaths{
  new: string, 
  M_pop: string, 
  total: number
}

export interface IStatisticTests{
  M_pop: number, total: number
}