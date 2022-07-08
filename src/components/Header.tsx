import { View, Stack, Text, Button, Element, Dropdown } from '@cosmo-au/design-system';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <View
      inverted
      container
      top={4}
      css={{
        a: {
          transition: '$default',
          '&:hover': {
            opacity: 0.6,
          },
        },
      }}>
      <Stack direction='row' flex='center'>
        <Stack direction='column' width={25} widthTablet={40} widthPhone={50}>
          <Link href='/'>
            <a>
              <Element
                css={{
                  display: 'inline-flex',
                  verticalAlign: 'middle',
                }}>
                <Image src='/images/logo.png ' alt='logo' width={100} height={45} />
              </Element>
            </a>
          </Link>
        </Stack>
        <Stack
          direction='column'
          css={{
            visible: 'tablet',
          }}
          align='right'
          widthTablet={60}
          widthPhone={50}>
          <a href='https://app.cosmogroup.io' target='_blank'>
            <Button theme='border' inline={4}>
              Sign In
            </Button>
          </a>
          <Dropdown
            submenu
            align='right'
            options={[
              {
                label: 'Home',
                value: '/',
              },
              {
                label: 'Testimonials',
                value: '/testimonials',
              },
              {
                label: 'Team',
                value: '/team',
              },
              {
                label: 'Service Areas',
                value: '/locations',
              },
              {
                label: 'Get Started',
                value: '/start',
              },
            ]}
            trigger={<Button>Menu</Button>}
          />
        </Stack>
        <Stack
          direction='column'
          align='center'
          width={50}
          css={{
            hidden: 'tablet',
          }}>
          <Link href='/'>
            <a>
              <Text as='h5' inline={5}>
                Home
              </Text>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Text as='h5' inline={5}>
                Testimonials
              </Text>
            </a>
          </Link>
          <Link href='/team'>
            <a>
              <Text
                as='h5'
                inline={5}
                css={{
                  opacity: router.pathname === '/team' ? 0.6 : 1,
                }}>
                Team
              </Text>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Text as='h5' inline='auto'>
                Service Areas
              </Text>
            </a>
          </Link>
        </Stack>

        <Stack
          direction='column'
          align='right'
          width={25}
          css={{
            hidden: 'tablet',
          }}>
          <a href='https://app.cosmogroup.io' target='_blank'>
            <Button theme='border' inline={4}>
              Sign In
            </Button>
          </a>
          <Link href='/start'>
            <a>
              <Button inline='auto' theme='solid'>
                Get Started
              </Button>
            </a>
          </Link>
        </Stack>
      </Stack>
    </View>
  );
}
