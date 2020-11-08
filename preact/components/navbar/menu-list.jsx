import {
  AngleIcon, FacebookIcon, LinkedinIcon, TwitterIcon, GithubIcon,
} from 'components/icons';
import DeferImg from 'components/defer-img/defer-img';
import theme from 'common/theme';
import style from './style';

const RightAngle = () => (
  <span class={ style.rightAngle } >
    <AngleIcon />
  </span>
);

const IntToolEndAdornment = () => (
  <span className={ style.pricingEndAdornment }>
    <small class={ style.from }>from</small>
    <span>
      Lorem
      <small>per month</small>
    </span>
    <span className={ style.rightAngle }>
      <AngleIcon />
    </span>
  </span>
);

const SensePlatEndAdornment = () => (
  <span className={ style.pricingEndAdornment }>
    <small className={ style.from }>from</small>
    <span>
      Lorem
      <small>per request</small>
    </span>
    <span className={ style.rightAngle }>
      <AngleIcon />
    </span>
  </span>
);

export default [
  {
    title: 'Test',
    href: '/test',
    subItems: [
      {
        title: 'Test test',
        description: 'Test test test test',
        startAdornment: (<DeferImg src='/assets/icon_inteligence.svg' />),
        endAdornment: (<RightAngle />),
        href: '/testest',
      },
      {
        title: 'Test lorem',
        description: 'Lorem ipsum dolor',
        startAdornment: (<DeferImg src='/assets/icon_sense.svg' />),
        endAdornment: (<RightAngle />),
        href: '/testestlorem',
      },
    ],
    fullscreenDesktopCustomAttr: 'product',
  },
  {
    title: 'Dolor',
    href: '/dolor',
    subItems: [
      {
        title: 'Lorem',
        description: 'Ipsum',
        startAdornment: (<DeferImg src='/assets/icon_bank.svg' />),
        href: '/dolor',
      },
    ],
    fullscreenDesktopCustomAttr: 'lor',
  },
];

export const submenu = [
  {
    title: 'Loro',
    href: 'loro',
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Login',
    href: '/login',
  },
];

export const socialMedia = [
  {
    title: 'Facebook',
    icon: (<FacebookIcon color={ theme.palette.common.white } />),
    href: '/face',
  },
  {
    title: 'Linkedin',
    icon: (<LinkedinIcon color={ theme.palette.common.white } />),
    href: '/link',
  },
  {
    title: 'Twitter',
    icon: (<TwitterIcon color={ theme.palette.common.white } />),
    href: '/twit',
  },
  {
    title: 'Github',
    icon: (<GithubIcon color={ theme.palette.common.white } />),
    href: '/github',
  },
];
