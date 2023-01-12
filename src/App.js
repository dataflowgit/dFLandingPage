import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Welcome from './components/welcome-msg-sec/Welcome';
import Support from './components/support/Support';
import HelpHub from './components/help-hub/HelpHub';
import LatestNews from './components/latest news/LatestNews'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Welcome />
      <Support />
      <HelpHub/>
      <LatestNews/>
    </div>
  );
}

export default App;
