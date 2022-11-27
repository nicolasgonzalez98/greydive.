
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import NavBar from './components/NavBar';
import styled from "styled-components";
import NotF404 from './components/404';

//Estilos


function App() {

  const AppBody = styled.div`
      background-color: #22142b;
      color: white;
      max-width: 100vw;
      min-height: 100vh;
    `

  return (
    <BrowserRouter>
      <AppBody >
        
        <Routes>
          <Route path='/:nombre-cliente-1mqw4z1sae3ddpxbyf6d/testeador-:id' element={<><NavBar /><Test /></>}/>
          <Route path='*' element={<NotF404 />} />
        </Routes>
      </AppBody>
    </BrowserRouter>
  );
}

export default App;
