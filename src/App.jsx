import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom";

function AppHooks() {
  const persons = [
    {
      personName: "Ali"
    },
    {
      personName: "Mohammad"
    },
    {
      personName: "Pourya"
    },
    {
      personName: "Majid"
    },
    {
      personName: "Mohsen"
    },
    {
      personName: "Reza"
    },
    {
      personName: "Hamid"
    },
    {
      personName: "Mehran"
    },
    {
      personName: "Hassan"
    },
    {
      personName: "Sadegh"
    },
  ];

  const [activePerson, setActivePerson] = useState(0);

  const randomPersons = e => {
    const len = persons.length;
    setActivePerson(Math.floor(Math.random() * len));
  };

  return (
    <>
      <div>{persons[activePerson].personName}</div>
      <button onClick={randomPersons}> Change Name</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppHooks />, rootElement);

export default App