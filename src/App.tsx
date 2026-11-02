import { Switch, Route, Router as WouterRouter } from "wouter";
import { LanguageProvider } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import IlProgetto from "@/pages/IlProgetto";
import PerChi from "@/pages/PerChi";
import ComeFunziona from "@/pages/ComeFunziona";
import Ricerca from "@/pages/Ricerca";
import Incontra from "@/pages/Incontra";
import Storie from "@/pages/Storie";
import Fondatori from "@/pages/Fondatori";
import Contatti from "@/pages/Contatti";
import Percorso from "@/pages/Percorso";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/il-progetto" component={IlProgetto} />
      <Route path="/per-chi" component={PerChi} />
      <Route path="/come-funziona" component={ComeFunziona} />
      <Route path="/percorsi" component={ComeFunziona} />
      <Route path="/percorsi/:slug" component={Percorso} />
      <Route path="/ricerca" component={Ricerca} />
      <Route path="/storie" component={Storie} />
      <Route path="/fondatori" component={Fondatori} />
      <Route path="/incontra" component={Incontra} />
      <Route path="/contatti" component={Contatti} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <WouterRouter>
        <Router />
      </WouterRouter>
    </LanguageProvider>
  );
}

export default App;
