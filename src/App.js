import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components'


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
      <Home></Home>
    </>

  );
}

export default App;