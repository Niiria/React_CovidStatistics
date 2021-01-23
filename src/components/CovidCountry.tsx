import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import DayPicker from 'react-day-picker';
import { CovidContex } from '../contex/CovidContex';
import 'react-day-picker/lib/style.css';
import { IStatistic } from '../contex/Interfaces';

export default function CovidCountry(statisticsSearched: IStatistic) {
  const { history, fetchData } = useContext(CovidContex);
  const [selectedDay, setSelectedDay] = useState(undefined);
  document.title=`Covid Statistics ${statisticsSearched.country}`;

  useEffect(() => {
    if (history.length===0 || history[0].country !== statisticsSearched.country ){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      fetchData('history', `history?day=${statisticsSearched.day}&country=${statisticsSearched.country.toLowerCase()}`);
    }
  });

  const handleDayClick = (day: SetStateAction<any>, { selected }: SetStateAction<any> ) => {
    if (day.toISOString().slice(0, 10)>statisticsSearched.day){
      return;
    }
    setSelectedDay(selected ? undefined : day);
    fetchData('history', `history?day=${day.toISOString().slice(0, 10)}&country=${statisticsSearched.country.toLowerCase()}`);
  
  };

  // console.log(statisticsSearched);

  return (
    <section className="flex flex-col bg-purple-100 bg-opacity-25 border-4 border-black rounded-lg text-white text-3xl sm:m-8 w-full ">
      <header className="flex flex-col sm:flex-row gap-4 stroke-black text-shadow m-2 justify-center items-center text-center border-b-4 border-black">
        <h2>Continent: <strong className="text-5xl">{statisticsSearched.continent}</strong></h2>
        <h1>Country: <strong className="text-5xl">{statisticsSearched.country}</strong></h1>
      </header>
      <div className="flex flex-col m-2 items-center justify-center flex-wrap sm:flex-row gap-4 border-b-4 border-black">
        <ul className="flex flex-col sm:flex-row   stroke-black text-shadow  gap-4 p-2 m-2 justify-center sm:justify-evenly text-center ">
          <li>
            <h3 className="font-bold italic">Cases:</h3>
            <ul>
              <li>
                Active: <strong className="text-3xl"> {statisticsSearched.cases.active}</strong>
              </li>
              <li>
                Critical: <strong className="text-3xl">{statisticsSearched.cases.critical}</strong> 
              </li>
              <li>
                New: <strong className="text-3xl"> {statisticsSearched.cases.new}</strong>
              </li>
              <li>
                Recovered: <strong className="text-3xl">{statisticsSearched.cases.recovered}</strong>
              </li>
              <li>
                Total: <strong className="text-3xl">{statisticsSearched.cases.total}</strong>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold italic">Deaths:</h3>
            <ul>
              <li>
                New: <strong className="text-3xl"> {statisticsSearched.deaths.new}</strong>
              </li>
              <li>
                Total: <strong className="text-3xl"> {statisticsSearched.deaths.total}</strong>
              </li>
            </ul>
            <h3 className="font-bold italic mt-2">Tests:</h3>
            <ul>
              <li>
                Total: <strong className="text-3xl"> {statisticsSearched.tests.total}</strong>
              </li>
            </ul>
          </li>
          <li />
        </ul>
        <div>
          <DayPicker
            selectedDays={selectedDay}
            onDayClick={handleDayClick}
            showOutsideDays 
          />
        </div>
      </div>
      <div>
        <ul className="flex-grow  overflow-y-scroll max-h-screen flex flex-col p-2 ">
          {history && history.map((element: IStatistic, index:number)=>(
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ul className="flex gap-4 text-3xl stroke-black text-shadow justify-evenly">
                <li>Time: <strong className="text-3xl">{element.time.slice(11, element.time.length-6)}</strong></li>
                <li>New: <strong className="text-3xl">{element.cases.new}</strong></li>
                <li>Deaths: <strong className="text-3xl">{element.deaths.new}</strong></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      
      <NavigationRoundedIcon
        className="fixed bottom-0 left-0 mb-4 ml-4  sm:m-2 border-4 z-50 text-black sm:text-white border-black sm:border-white p-2 cursor-pointer rounded-full"
        style={{ fontSize: 50 }}
        type="button"
        onClick={()=>{
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >UP
      </NavigationRoundedIcon>
    </section>
  );
}
