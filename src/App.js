import { createGlobalStyle } from 'styled-components';

// components
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Pokedex from './pages/Pokedex/Pokedex';


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
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Home></Home>
      {/* <Pokedex></Pokedex> */}
    </>

  );
}

export default App;