import './App.css';
import AppRouter from './Components/App/AppRouter/AppRouter';
import { MainStyle } from './Components/App/Styles/Main.Styled';
import { Bloglist } from './Components/Pages/Bloglist';
import { Footer } from './Components/Partials/Footer';
import Header from "./Components/Partials/Header"

function App() {
  return (
    <>
      <Header />
      <MainStyle>
        <AppRouter />
        <Bloglist />
      </MainStyle>
      <Footer />
    </>
  );
}

export default App;
