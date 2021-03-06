import React from "react";
import { Route, Switch } from "react-router";
import { PageLayout } from "./components/layout/PageLayout";
import { SWRConfig } from "swr";
import { GamePage } from "./pages/GamePage";
import { SeasonPage } from "./pages/SeasonPage";
import { Home } from "./pages/Home";
import { EventsPage } from "./pages/EventsPage";
import { SeasonListPage } from "./pages/SeasonListPage";
import PlayerUpdatesPage from "pages/PlayerUpdatesPage";
import BossfightPage from "pages/BossfightPage";
// import { PlayersPage } from "./pages/PlayersPage";

const swrConfig = {
    fetcher: (...args) => fetch(...args).then((res) => res.json()),
    revalidateOnFocus: false,
};

export default function App() {
    return (
        <SWRConfig value={swrConfig}>
            <PageLayout>
                <Switch>
                    <Route path="/game/:gameId" component={GamePage} />
                    <Route path="/bossfight/:fightId" component={BossfightPage} />
                    <Route path="/seasons" component={SeasonListPage} />
                    <Route path="/season/:season" component={SeasonPage} />
                    <Route path="/events" component={EventsPage} />
                    {/* <Route path="/players" component={PlayersPage} /> */}
                    <Route path="/player/:playerId" component={PlayerUpdatesPage} />
                    <Route path="/" component={Home} />
                </Switch>
            </PageLayout>
        </SWRConfig>
    );
}
