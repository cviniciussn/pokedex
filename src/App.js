import { createGlobalStyle } from 'styled-components';

// components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pokedex from './pages/Pokedex/Pokedex';
import Router from './routes/Router';
import GeneralContexts from './contexts/GeneralContexts';
import Modal from './components/Modal/Modal';



const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: 0;
  font-family: Poppins, sans-serif;
}
`

function App() {
  return (
    <GeneralContexts>
      <GlobalStyle></GlobalStyle>
      <Router></Router>
      <Modal></Modal>
     </GeneralContexts>

  );
}

export default App;