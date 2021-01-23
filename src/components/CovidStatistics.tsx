import React, { useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete';
import { CovidContex } from '../contex/CovidContex';
import CovidCountry from './CovidCountry';
import { IStatistic } from '../contex/Interfaces';


export default function CovidStatistics() {
  const { statistics, countries, statisticsSearched, fetchData, searchStatistic } = useContext(CovidContex);
  document.title='Covid Statistics';
 
  useEffect(()=>{
    countries.length === 0 && 
      fetchData('countries', 'countries');
    statistics.length === 0 &&
      fetchData('statistics', 'statistics');
  });

  const handleSubmit = (e: React.FormEvent ) =>{
    e.preventDefault();
  };

  const topCountries = statistics.sort((a: IStatistic, b: IStatistic) => (b.cases.new) - (a.cases.new)).slice(0, 5).map((country: IStatistic, index: number)=>{
    return (
      // eslint-disable-next-line react/no-array-index-key
      <li className="font-medium flex gap-2 flex-col text-lg border-4 border-black p-2 rounded-lg bg-purple-100 bg-opacity-25 cursor-pointer transform hover:scale-110" key={index} onClick={()=>{searchStatistic(country.country);}}>
        <h2 className="font-bold">Country: {country.country}</h2>
        <div>
          <h3>Continent: {country.continent}</h3>
          <p className="underline">Cases New: <strong className="text-shadow ">{country.cases.new}</strong>
          </p>
          <p>Cases Total: {country.cases.total}</p>
        </div>
      </li>
    );
  });

  // console.log(statistics);

  return (
    <section className="flex-grow flex flex-col sm:flex-row justify-between covidStatistics_background">
      <div className=" sm:w-4/5 flex">
        {statisticsSearched.length!==0 &&
        <CovidCountry {...statisticsSearched[0]} />}
      </div>
      <div className=" sm:w-1/5 flex flex-col p-6 sm:mb-0 mb-20 ">
        <form className="flex p-2 justify-end sm:justify-center border-4 w-full border-black sm:relative fixed z-20 bottom-0 left-0  bg-gray-400  rounded-lg" onSubmit={handleSubmit}>
          <Autocomplete
            onChange={(e, newValue) => {
              searchStatistic(newValue);
            }}
            id="combo-box-demo"
            options={countries}
            getOptionLabel={(option: string) => option}
            style={{ width: 300,  }}
            renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Choose country" variant="outlined" color="secondary" />}
          />
        </form>
        <div className="flex flex-col text-center">
          <h2 className="font-merienda text-4xl text-white sm:text-2xl">Top 5 countries</h2>
          <ul className="flex flex-col gap-2">
            {topCountries}
          </ul>
        </div>
      </div>
    </section>
  );
}
