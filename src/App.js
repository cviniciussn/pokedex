import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css'

// components
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