import './App.css';
import Home from './components/Home';
import { NewsContextProvider } from './NewsContext';

function App() {
  return (
    <NewsContextProvider>
      <div className="App">
        <Home />
      </div>{' '}
    </NewsContextProvider>
  );
}

export default App;
