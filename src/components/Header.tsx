import { View, Image, Stack, Button, Dropdown, fadeIn } from '@cosmoau/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <View
      top={3}
      css={{
        borderBottom: '0.1rem solid $border',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
      bottom={3}>
      <Stack
        direction='row'
        flex='center'
        css={{ animation: `${fadeIn}  0.5s ease-in-out` }}>
        <Stack direction='column' width={25} widthTablet={40} widthPhone={50}>
          <Link href='/'>
            <Stack
              css={{
                display: 'inline-flex',
                verticalAlign: 'middle',
              }}>
              <Image src='/images/logo-new.png' alt='logo' width={120} height={36.5} />
            </Stack>
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
          <a href='https://v1.cosmogroup.io' target='_blank' rel='noreferrer'>
            <Button name='sign-in' inline={4} ariaLabel='Owners Portal'>
              Owners
            </Button>
          </a>
          <Dropdown
            submenu
            last
            width='16rem'
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
                label: 'Locations',
                value: '/locations',
              },
              {
                label: 'Sign Up',
                value: '/start',
              },
              {
                label: '🏡 Book a stay',
                value: 'https://airbnb.com/p/cosmo',
              },
            ]}
            trigger={
              <Button
                name='menu'
                theme='solid'
                ariaLabel='Open Navigation Menu'
                css={{
                  '&:hover': {
                    background: 'rgb(95, 113, 128) !important',
                    color: '$background',
                  },
                  'background': '$accentIHM !important',
                }}>
                Menu
              </Button>
            }
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
            <Button theme='minimal'>Home</Button>
          </Link>
          <Link href='/testimonials'>
            <Button
              theme={router.pathname === '/testimonials' ? 'fill' : 'minimal'}
              css={{
                color:
                  router.pathname === '/testimonials'
                    ? '$accent !important'
                    : 'inherit',
              }}>
              Testimonials
            </Button>
          </Link>
          <Link href='/team'>
            <Button
              theme={router.pathname === '/team' ? 'fill' : 'minimal'}
              css={{
                color: router.pathname === '/team' ? '$accent !important' : 'inherit',
              }}>
              Team
            </Button>
          </Link>

          <Link href='/locations'>
            <Button
              theme={router.pathname === '/locations' ? 'fill' : 'minimal'}
              css={{
                color:
                  router.pathname === '/locations' ? '$accent !important' : 'inherit',
              }}>
              Locations
            </Button>
          </Link>

          <Dropdown
            submenu
            last
            width='17rem'
            align='left'
            options={[
              {
                label: 'Latest News',
                value: 'https://cosmogroup.io/blog',
              },
              {
                label: 'Legal Info',
                value: 'https://cosmogroup.io/legal',
              },
              {
                label: 'Airbnb Calculator',
                value: 'https://cosmogroup.io/mini',
              },
              {
                label: 'Contact Us',
                value: 'https://cosmogroup.io/mini',
              },
              {
                label: '🏡 Book a stay',
                value: 'https://airbnb.com/p/cosmo',
              },
            ]}
            trigger={
              <Button
                name='menu'
                theme='minimal'
                ariaLabel='Open Navigation Menu'
                icon={<CaretDown weight='light' />}
                iconPosition='right'>
                More
              </Button>
            }
          />
        </Stack>

        <Stack
          direction='column'
          align='right'
          width={25}
          css={{
            hidden: 'tablet',
          }}>
          <a href='https://v1.cosmogroup.io' target='_blank' rel='noreferrer'>
            <Button name='sign-in' inline={4} ariaLabel='Owners Portal'>
              Owners Portal
            </Button>
          </a>
          <Link href='/start'>
            <Button
              name='get-started'
              inline='auto'
              theme='solid'
              css={{
                '&:hover': {
                  background: 'rgb(95, 113, 128) !important',
                  color: '$background',
                },
                'background': '$accentIHM !important',
              }}
              ariaLabel='Sign Up'>
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Stack>
    </View>
  );
}
