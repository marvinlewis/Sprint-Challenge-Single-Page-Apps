import React from "react";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import { Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      
      <Route exact path="/">
      <WelcomePage/>
      </Route>

      <Route exact path="/characters">
      <CharacterList/>
      </Route>
    </main>
  );
}
