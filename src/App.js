import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
