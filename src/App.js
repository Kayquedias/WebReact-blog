import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main-content">
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
