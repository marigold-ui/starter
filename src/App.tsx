import React from 'react';
import { Button, Inset, MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-b2b';

export const App = () => (
  <MarigoldProvider theme={theme}>
    <Inset space={10}>
      <Button variant="primary" onClick={() => alert('Hey there!')}>
        Hello World!!!
      </Button>
    </Inset>
  </MarigoldProvider>
);
