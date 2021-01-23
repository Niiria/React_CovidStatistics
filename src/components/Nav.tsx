import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav_background sticky top-0 flex flex-wrap p-2 items-center z-50  justify-center sm:justify-between bg-teal-200 border-b-4 border-black">
      <img className="cursor-pointer absolute sm:relative m-2 sm:m-0 top-0 left-0 w-16 sm:w-24" src="https://cdn.pixabay.com/photo/2020/04/19/07/02/coronavirus-5062149_960_720.png" alt="logo" onClick={()=>window.open('https://rapidapi.com/api-sports/api/covid-193?endpoint=apiendpoint_dfb9e52d-bd90-48ec-a571-8b78610a736d')} />
      <ul className="flex flex-wrap justify-evenly text-white text-3xl sm:text-5xl font-bold font-merienda gap-4 sm:gap-6 mt-24 sm:mt-0 ">
        <li className="transform transition duration-200 hover:scale-110 ">
          <NavLink className="stroke-black" exact to="/statistics">Statistics</NavLink>
        </li>
        <li className="transform transition duration-200 hover:scale-110">
          <NavLink className="stroke-black" exact to="/history">History</NavLink>
        </li>
        <li className="transform transition duration-200 hover:scale-110">
          <NavLink className="stroke-black" exact to="/">Rules</NavLink>
        </li>
      </ul>
    </nav>
  );
}
