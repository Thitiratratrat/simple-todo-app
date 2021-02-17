import Home from './components/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
