import React from 'react';
import {
  Button,
  Dialog,
  Inset,
  MarigoldProvider,
  Text,
} from '@marigold/components';
import theme from '@marigold/theme-rui';

export const App = () => (
  <MarigoldProvider theme={theme}>
    <Inset space={10}>
      <Dialog.Trigger dismissable={false}>
        <Button variant="primary">Open me</Button>
        <Dialog closeButton>
          <Text>Hello from Marigold! 🏵️</Text>
        </Dialog>
      </Dialog.Trigger>
    </Inset>
  </MarigoldProvider>
);
