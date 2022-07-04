import './App.css';
import Header from './header/header';
import MAIN_CONTENT from './Main_Content/Main_Content';
import {ThemeProvider} from './ThemeProvider';
import {UserProvider} from './User';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ThemeProvider>
          <Header />
          <MAIN_CONTENT />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
