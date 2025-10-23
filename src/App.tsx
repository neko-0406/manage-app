import TopMenuBar from './components/TopMenuBar';
import StatusBar from './components/StatusBar';
import MainContent from './components/MainContent';

import './App.css'
import './styles/Color.css'
import SideMenuBar from './components/SideMenuBar';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="main-root">
        <TopMenuBar />
        <MainContent>
          <SideMenuBar />
        </MainContent>
        <StatusBar />
      </div>
    </AppProvider>
  );
}

export default App;
