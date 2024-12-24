// import { Ebay } from '@react-liam/ebay';
import { MyContainer } from '@react-liam/ebay';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, h1 {
    margin: 0;
    padding: 0;
  }
`;

export function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Ebay /> */}
      <MyContainer />
    </>
  );
}

export default App;
