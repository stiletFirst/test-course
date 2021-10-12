import React from 'react';
import './App.css';
import { InputWrap } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [citiesList, dispatch] = useCitiesList();

  return (
    <div className="Main">
      <InputWrap dispatch={dispatch} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
