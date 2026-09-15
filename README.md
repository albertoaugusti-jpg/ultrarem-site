# UltraRem — Sito Web

Sito marketing di UltraRem, costruito con **Vite + React + TypeScript + Tailwind CSS v4**.

Questo progetto è una versione standalone (non più un monorepo pnpm) del sito che gira su Replit: contiene solo il codice necessario per il sito pubblico (le pagine, i componenti e lo stile), senza il server API né i pacchetti condivisi non utilizzati dal sito.

## ⚠️ Prima di andare online: sostituisci le immagini placeholder

**Il codice sorgente esportato da Replit non includeva le immagini** (solo il codice). Per permettere al progetto di compilare, ho generato immagini placeholder temporanee (rettangoli con etichetta) con **esattamente gli stessi nomi file** usati nel codice, così non devi modificare nessun import.

Le immagini da sostituire si trovano in due punti:

1. **`src/assets/`** — le 11 immagini usate nelle pagine del sito (Home, Come Funziona, Demo, Per Chi, Ricerca).
2. **`public/img/`** — le 12 immagini usate nella presentazione statica (`public/presentazione.html`), più `public/favicon.png`.

Per sostituirle, basta salvare la tua immagine reale **con lo stesso identico nome file** nella stessa cartella, sovrascrivendo il placeholder. Non serve toccare il codice.

## Struttura del progetto

```
ultrarem-site/
├── public/
│   ├── favicon.png
│   ├── img/                  # immagini usate da presentazione.html
│   └── presentazione.html    # pagina statica della presentazione/pitch deck
├── src/
│   ├── assets/                # immagini usate dalle pagine React
│   ├── components/
│   │   ├── ui/                 # Button, Card (shadcn/ui, versione ridotta)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── StripeBar.tsx
│   ├── lib/
│   │   ├── i18n.tsx            # gestione lingua IT/EN
│   │   └── utils.ts
│   ├── pages/                  # Home, IlProgetto, PerChi, ComeFunziona,
│   │                            # Ricerca, Demo, Contatti, Prenota, not-found
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── render.yaml
```

## Cosa è stato semplificato rispetto al progetto Replit originale

- **Rimosso** `artifacts/api-server` (server Express/API non usato dal sito).
- **Rimossi** i pacchetti condivisi del workspace pnpm (`lib/api-client-react`, `lib/api-spec`, `lib/api-zod`) — non erano usati dal sito.
- **Ridotta** la libreria di componenti shadcn/ui alle sole 2 componenti effettivamente usate nel codice (`Button`, `Card`), eliminando una trentina di dipendenze npm non necessarie (react-query, radix-ui vari, recharts, cmdk, ecc.).
- **Semplificato** `App.tsx` rimuovendo `QueryClientProvider`, `TooltipProvider` e `Toaster`, mai utilizzati da nessuna pagina.
- Il progetto ora è un singolo pacchetto npm standalone, pronto per essere pubblicato come **Static Site** su Render — non serve più un server Node in esecuzione.

## Form di prenotazione (Prenota.tsx)

Il modulo "Prenota" invia i dati a un endpoint Google Apps Script tramite `fetch(..., { mode: "no-cors" })`. Nel codice trovi:

```ts
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/INCOLLA_QUI_IL_TUO_URL/exec";
```

**Devi sostituire questo URL placeholder** con l'URL del tuo Google Apps Script (lo stesso che probabilmente stavi già usando su Replit) prima di andare online, altrimenti il modulo non invierà le richieste da nessuna parte. Si trova in `src/pages/Prenota.tsx`.

## Sviluppo locale

Richiede [Node.js](https://nodejs.org/) 18 o superiore.

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

Per verificare che compili correttamente prima di pubblicare:

```bash
npm run build
npm run preview
```

## Come pubblicare: GitHub + Render

### 1. Crea il repository su GitHub

1. Vai su [github.com/new](https://github.com/new) e crea un nuovo repository (es. `ultrarem-site`). Puoi lasciarlo vuoto (senza README, senza `.gitignore`: sono già inclusi qui).
2. Nella cartella di questo progetto, apri un terminale ed esegui:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-UTENTE/ultrarem-site.git
   git push -u origin main
   ```

   (Sostituisci `TUO-UTENTE/ultrarem-site` con il percorso del tuo repository.)

### 2. Collega il repository a Render

1. Vai su [dashboard.render.com](https://dashboard.render.com/) e accedi (o crea un account gratuito).
2. Clicca **New +** → **Static Site**.
3. Seleziona il repository GitHub `ultrarem-site` appena creato (potrebbe chiederti di autorizzare Render ad accedere ai tuoi repository GitHub).
4. Render rileverà automaticamente il file `render.yaml` incluso in questo progetto e pre-compilerà le impostazioni:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Clicca **Create Static Site** (o **Apply**, se ti propone il `render.yaml`).
6. Il primo deploy parte automaticamente. In pochi minuti il sito sarà online su un indirizzo tipo `https://ultrarem-site.onrender.com`.

### 3. Dominio personalizzato (opzionale)

Dalla dashboard del tuo Static Site su Render, vai su **Settings → Custom Domains** e segui le istruzioni per collegare `ultrarem.it` (o il dominio che preferisci), aggiornando i record DNS come indicato da Render.

### 4. Deploy automatici

Una volta collegato, ogni `git push` sul branch `main` farà ripartire automaticamente una nuova build e un nuovo deploy su Render — non serve fare altro.

## Checklist prima del lancio pubblico

- [ ] Sostituire tutte le immagini placeholder in `src/assets/` e `public/img/` con le foto/loghi reali.
- [ ] Inserire l'URL reale di Google Apps Script in `src/pages/Prenota.tsx` (`APPS_SCRIPT_URL`).
- [ ] Verificare i link "Privacy Policy" nel form di Prenota (attualmente puntano a `#`).
- [ ] Eseguire `npm run build` senza errori prima di ogni deploy importante.
- [ ] (Opzionale) Collegare un dominio personalizzato su Render.
