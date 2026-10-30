import { Switch, Route, Router as WouterRouter } from "wouter";
import { LanguageProvider } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import IlProgetto from "@/pages/IlProgetto";
import PerChi from "@/pages/PerChi";
import ComeFunziona from "@/pages/ComeFunziona";
import Ricerca from "@/pages/Ricerca";
import Incontra from "@/pages/Incontra";
import Contatti from "@/pages/Contatti";
import Prenota from "@/pages/Prenota";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/il-progetto" component={IlProgetto} />
      <Route path="/per-chi" component={PerChi} />
      <Route path="/come-funziona" component={ComeFunziona} />
      <Route path="/ricerca" component={Ricerca} />
      <Route path="/incontra" component={Incontra} />
      <Route path="/contatti" component={Contatti} />
      <Route path="/prenota" component={Prenota} />
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
