import React from 'react';
import '../App.css';
import { Card } from '../Card';

export const CardList = ({ citiesList, dispatch }) => {
  return (
    <div className="CardList">
      {
        citiesList.citiesList.map(city => <Card key={city} city={city} dispatch={dispatch} />)
      }
    </div>
  );
}