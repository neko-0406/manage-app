import TopMenuBar from './components/TopMenuBar';
import StatusBar from './components/StatusBar';
import MainContent from './components/MainContent';

import './App.css'
import './styles/Color.css'

function App() {
  return (
    <div className="main-root">
      <TopMenuBar />
      <MainContent>
        <div></div>
      </MainContent>
      <StatusBar />
    </div>
  );
}

export default App;
