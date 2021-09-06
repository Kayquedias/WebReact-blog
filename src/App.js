import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFoundPage from './components/PageNotFound';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/New-blog">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
