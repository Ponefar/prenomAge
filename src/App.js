import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Accueil } from './component/Accueil'
import { Pays } from './component/Pays'
import { AgePrenom } from './component/AgePrenom'
import './css/css.css'


function App() {
  return (
    <div>
        <Router> 
          <div className="menuGlobal">
            <Link className="liMenu" to="/">Accueil</Link>
            <Link className="liMenu" to="/pays">Pays</Link>
            <Link className="liMenu" to="/prenom">Age - Prénom</Link>
          </div>

          <Switch>
            <Route exact path="/"><Accueil/></Route>
            <Route path="/pays"><Pays/></Route>
            <Route path="/prenom"><AgePrenom/></Route>

        </Switch>
        </Router>
    </div>
  );
}

export default App;
