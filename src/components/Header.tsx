/** @format */

import { View, Stack, Button, Dropdown } from '@withcosmo/design-system';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <View inverted container top={4}>
      <Stack direction='row' flex='center'>
        <Stack direction='column' width={25} widthTablet={40} widthPhone={50}>
          <Link href='/'>
            <a>
              <Stack
                css={{
                  display: 'inline-flex',
                  verticalAlign: 'middle',
                }}>
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  width={150 * 0.66}
                  height={68 * 0.66}
                />
              </Stack>
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
          <a href='https://v1.cosmogroup.io' target='_blank' rel='noreferrer'>
            <Button name='sign-in' inline={4} ariaLabel='Sign In'>
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
            <a>
              <Button theme='minimal'>Home</Button>
            </a>
          </Link>
          <Link href='/testimonials'>
            <a>
              <Button
                theme={router.pathname === '/testimonials' ? 'fill' : 'minimal'}
                css={{
                  opacity: router.pathname === '/testimonials' ? 0.6 : 1,
                }}>
                Testimonials
              </Button>
            </a>
          </Link>
          <Link href='/team'>
            <a>
              <Button
                theme={router.pathname === '/team' ? 'fill' : 'minimal'}
                css={{
                  opacity: router.pathname === '/team' ? 0.6 : 1,
                }}>
                Team
              </Button>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <Button
                theme={router.pathname === '/contact' ? 'fill' : 'minimal'}
                css={{
                  opacity: router.pathname === '/contact' ? 0.6 : 1,
                }}>
                Contact
              </Button>
            </a>
          </Link>
          <Link href='/locations'>
            <a>
              <Button
                theme={router.pathname === '/locations' ? 'fill' : 'minimal'}
                css={{
                  opacity: router.pathname === '/locations' ? 0.6 : 1,
                }}>
                Locations
              </Button>
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
          <a href='https://cosmogroup.io' target='_blank' rel='noreferrer'>
            <Button
              name='pushback'
              theme='fill'
              inline={4}
              ariaLabel='Learn more on our main website.'>
              Learn More
            </Button>
          </a>
          <Link href='/start'>
            <a>
              <Button
                name='get-started'
                inline='auto'
                theme='solid'
                ariaLabel='Get Started'>
                Join Cosmo
              </Button>
            </a>
          </Link>
        </Stack>
      </Stack>
    </View>
  );
}
