/** @format */

import { Stack, Text, View, Button } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';

export default function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title='Page not found' />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h2'>Page not found</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Text as='h3'>Sorry, the page you are looking for is not available. </Text>
            <Text as='h5' bottom={6}>
              Feel free to browse our site from the menu at the top of the page, or if you
              have a question - get in touch
            </Text>
            <Button ariaLabel='Chat with our team' name='chat'>
              <a href='mailto:contact@cosmogroup.io'>Chat with us</a>
            </Button>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
