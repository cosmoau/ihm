import { View, Stack, Button, Dropdown } from '@cosmoau/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <View inverted top={4}>
      <Stack direction='row' flex='center'>
        <Stack direction='column' width={25} widthTablet={40} widthPhone={50}>
          <Link href='/'>
            <Stack
              css={{
                display: 'inline-flex',
                verticalAlign: 'middle',
              }}>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={150 * 0.55}
                height={68 * 0.55}
              />
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
            <Button name='sign-in' inline={4} ariaLabel='Owners' theme='fill'>
              Owners
            </Button>
          </a>
          <Dropdown
            submenu
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
                label: 'Service Areas',
                value: '/locations',
              },
              {
                label: 'Contact',
                value: '/contact',
              },
              {
                label: 'Get Started',
                value: '/start',
              },
            ]}
            trigger={
              <Button name='menu' theme='solid' ariaLabel='Open Navigation Menu'>
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
                  router.pathname === '/testimonials' ? '$accent !important' : 'inherit',
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
          <Link href='/contact'>
            <Button
              theme={router.pathname === '/contact' ? 'fill' : 'minimal'}
              css={{
                color: router.pathname === '/contact' ? '$accent !important' : 'inherit',
              }}>
              Contact
            </Button>
          </Link>
        </Stack>

        <Stack
          direction='column'
          align='right'
          width={25}
          css={{
            hidden: 'tablet',
          }}>
          <a href='https://v1.cosmogroup.io' target='_blank' rel='noreferrer'>
            <Button name='sign-in' inline={4} ariaLabel='Owners' theme='fill'>
              Owners
            </Button>
          </a>
          <Link href='/start'>
            <Button
              name='get-started'
              inline='auto'
              theme='solid'
              ariaLabel='Get Started'>
              Get Started
            </Button>
          </Link>
        </Stack>
      </Stack>
    </View>
  );
}
