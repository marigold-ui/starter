import { Button, Headline, Inset, Stack, Text } from '@marigold/components';

export const App = () => (
  <Inset space={10}>
    <Stack space={6} alignX="center">
      <Headline level={2}>Welcome to Marigold 🏵️</Headline>
      <Text>Start prototyping by editing this file.</Text>
      <Button variant="primary" onPress={() => alert('It works!')}>
        Get Started
      </Button>
    </Stack>
  </Inset>
);
