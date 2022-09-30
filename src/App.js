import './App.css';
import AppRouter from './Components/App/AppRouter/AppRouter';
import { MainStyle } from './Components/App/Styles/Main.Styled';
import Header from "./Components/Partials/Header"

function App() {
  return (
    <MainStyle>
      <Header />
      <AppRouter />
    </MainStyle>
  );
}

export default App;
