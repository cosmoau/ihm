import { Stack, Text, View, Box, Badge } from '@cosmoau/ui';
import { Widget } from '@typeform/embed-react';
import { NextSeo } from 'next-seo';
import { EnvelopeSimple, Phone } from 'phosphor-react';
export default function Contact(): JSX.Element {
  return (
    <>
      <NextSeo
        title='Contact'
        description='We are here to help you make the most of your investment property.'
      />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row' flex='center'>
          <Stack direction='column' width={50}>
            <Text as='h2'>
              We are here to help you make the most of your investment property.
            </Text>
          </Stack>
          <Stack
            direction='column'
            width={50}
            align='right'
            css={{
              phone: {
                paddingTop: '$5',
                textAlign: 'left',
              },
            }}>
            <Badge icon={<EnvelopeSimple weight='duotone' />} inline={5}>
              <a href='contact@cosmogroup.io'>contact@cosmogroup.io</a>
            </Badge>
            <Badge icon={<Phone weight='duotone' />}>
              <a href='tel:+61370355800'>(03) 7035 5800</a>
            </Badge>
          </Stack>
        </Stack>
      </View>
      <View inverted container bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column'>
            <Box theme='fill' css={{ borderRadius: '$3' }}>
              <Widget
                id='dA0mHRs2'
                opacity={0}
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
