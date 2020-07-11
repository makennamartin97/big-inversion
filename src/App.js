import React from 'react';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-info">
        <h1 className="text-light text-center">Identification</h1>
      </div>
        <PersonCard firstName="Makenna" lastName="Martin" age={23} hairColor="blonde" />
     
        <PersonCard firstName="Michele" lastName="Martin" age={48} hairColor="blonde"/>

        <PersonCard firstName="James" lastName="Franco" age={40} hairColor="brown"/>

        <PersonCard firstName="Seth" lastName="Rogan" age={43} hairColor="brown"/>

    </div>
  );
}


export default App;
