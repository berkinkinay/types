import React from "react";
import Main from "./components/Main";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
// useReducer with cases
import { Run } from "./components/Run";
// useContext
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/state/User";

function App() {
  const personName = {
    first: 'Berkin',
    last: 'Kınay',
  };

  const nameList = [
    {
      first: 'Berkin',
      last: "Kınay",
    },
    {
      first: 'Oğulcan',
      last: 'Çevik',
    },
    {
      first: 'Tufan',
      last: 'Uşaklıgil',
    },
  ];

  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Status status="loading" />
      <Heading> Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to him!</Heading>
      </Oscar>
      <Main name="Berkin" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Run value="" handleChange={(event) => console.log(event)} />
      <Main name ='Berkin' massageCount={20} isLoggedIn={false} />
      <Person name ={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
