import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Game from './pages/Game';
import Rank from './pages/Rank';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Rank} />
                <Route path="/ranking" exact component={Rank} />

                <Route path="/game/:id" component={Game} />
                <Route path="/game" component={Game} />
            </Switch>
        </Router>
    );
}