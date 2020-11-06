import React from 'react';
import tw from 'twin.macro';

const AppContainer = tw.div`bg-gray-900 py-4 px-6`;
const MyHeading = tw.h1`text-gray-300 text-2xl`;

function App() {
  return (
    <AppContainer>
      <MyHeading>DHENCIOSS</MyHeading>
    </AppContainer>
  );
}

export default App;
