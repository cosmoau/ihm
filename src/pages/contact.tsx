/* eslint-disable @typescript-eslint/no-explicit-any */
import { Widget } from '@typeform/embed-react';
import { Stack, Text, View, Box, Badge } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import { EnvelopeSimple, Phone } from 'phosphor-react';
export default function Contact(): JSX.Element {
  return (
    <>
      <NextSeo title='Contact' description='Our team is ready to assist you in any way we can. We want your property to earn the profits it deserves.' />
      <View inverted container top={7} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' width={70} offset={15} widthTablet={100} offsetTablet={0} align='center'>
            <Text as='h2'>Contact</Text>
            <Text as='h5' accent>
              Our team is ready to assist you in any way we can. We want your property to earn the profits it deserves. If you are a guest currently staying with Cosmo, please find
              our guest services contacts within your booking app and confirmation emails.
            </Text>
            <Stack top={5}>
              <Badge icon={<EnvelopeSimple weight='duotone' />} inline={5}>
                <a href='contact@cosmogroup.io'>contact@cosmogroup.io</a>
              </Badge>
              <Badge icon={<Phone weight='duotone' />}>
                <a href='tel:+61370355800'>(03) 7035 5800</a>
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View inverted container bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={80} offset={10} widthTablet={100} offsetTablet={0} align='center'>
            <Box theme='fill' css={{ borderRadius: '$3' }}>
              <Widget
                id='dA0mHRs2'
                opacity={0}
                disableAutoFocus
                height={555}
                hidden={{
                  url: 'ihostme.com.au',
                }}
                style={{
                  overflowY: 'visible',
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
