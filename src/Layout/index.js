import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/index";
import { Switch, Route } from "react-router-dom";
import CreateDeck from "../Deck/CreateDeck";
import Deck from "../Deck/Deck";
import EditDeck from "../Deck/EditDeck";
import EditCard from "../Card/EditCard";
import AddCard from "../Card/AddCard";
import Study from "../Study/Study";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;