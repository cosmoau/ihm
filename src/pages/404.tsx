import { Stack, Text, View, Button } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';

export default function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title='Page not found' />
      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h1'>Page not found</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Text as='h2'>Sorry, the page you are looking for is not available. </Text>
            <Text as='h5' bottom={6}>
              Feel free to browse our site from the menu at the top of the page, or if you have a question - get in touch
            </Text>
            <Button aria-label='Chat with our team'>
              <a href='mailto:contact@cosmogroup.io'>Chat with us</a>
            </Button>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
