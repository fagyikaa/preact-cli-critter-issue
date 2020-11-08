import {
  CapterraIcon,
  G2CrowdIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from 'components/icons';
import DeferImg from 'components/defer-img/defer-img';
import Stars from 'components/stars/stars';
import Typography from 'components/typography/typography';
import { classNames } from 'common/utils';
import theme from 'common/theme';
import { contact } from 'common/navigation';
import style from './style';

const navigationList = [
  { title: 'Home', href: '/' },
  { title: 'Test', href: '/' },
  { title: 'Test', href: '/' },
  { title: 'Test', href: '/' },
  { title: 'Test', href: '/' },
  { title: 'API Test', href: '/' },
  { title: 'Test', href: '/', native: true },
  { title: 'Test Demo', href: '', onClick: console.log },
  { title: 'Test', href: '/' },
];

const menuList = [
  { title: 'Test', href: '/' },
  { title: 'Events', href: '/' },
  { title: 'Careers', href: '/' },
  { title: 'Contact Us', href: '/' },
  { title: 'About', href: '/' },
  { title: 'Login', href: '/' },
];

const socialList = [
  { title: 'Facebook', icon: <FacebookIcon />, href: '/' },
  { title: 'Linkedin', icon: <LinkedinIcon />, href: '/' },
  { title: 'Twitter', icon: <TwitterIcon />, href: '/' },
  { title: 'Github', icon: <GithubIcon />, href: '/' },
];

const Footer = () => (
    <footer class={ `container ${style.footer}` }>
      <div class='row'>
        <div className={ classNames('col-6 col-5-md', style.infoBlock) }>
          <span className={ style.loro }>
            <Typography color='dark' className={ style.ips }>
            </Typography>
          </span>
          <DeferImg className={ style.certifiedIcon } src='/assets/ISO27001certified.svg' />
          <span className={ style.contact }>
            <Typography color='dark'>M: <a href='mailto:info@asd.io'>{ contact[0] }</a></Typography>
            <Typography color='dark'>P: { contact[1] }</Typography>
          </span>
        </div>
        <div className={ classNames('col-6 col-7-md', style.reviews) }>
          <span className={ style.reviewLogoContainer }>
            <a href='https://www.g2.com' target='_blank' rel='noreferrer'>
              <G2CrowdIcon color={ theme.palette.text.dark } />
            </a>
            <Stars className={ style.stars } />
          </span>
          <span className={ style.reviewLogoContainer }>
            <a href='https://www.capterra.com' target='_blank' rel='noreferrer'>
              <CapterraIcon color={ theme.palette.text.dark } />
            </a>
            <Stars className={ style.stars } />
          </span>
        </div>
      </div>
      <hr className={ style.divider } />
      <div className={ classNames('row', style.navigationRow) }>
        <div className='col-7'>
          <Typography color='dark'>Navigation</Typography>
          <nav>
            <ul>
              { navigationList.map((item) => (
                <li key={ item.title }>
                  <a href={ item.href } onClick={ item.onClick } native={ item.native }>{ item.title }</a>
                </li>
              )) }
            </ul>
          </nav>
        </div>
        <div className={ classNames('col-5', style.menu) }>
          <Typography color='dark'>Menu</Typography>
          <nav>
            <ul>
              { menuList.map((item) => (
                <li key={ item.title }>
                  <a href={ item.href } native={ item.native}>{ item.title }</a>
                </li>
              )) }
            </ul>
          </nav>
        </div>
      </div>
      <div className={ classNames('row', style.bottomRow) }>
        <div className={ classNames('col-7', style.social) }>
          <Typography color='dark'>Social</Typography>
          <ul>
            { socialList.map((item) => (
              <li key={ item.title }>
                <a href={ item.href } target='_blank' rel='noreferrer'>
                  { item.icon }
                  { item.title }
                </a>
              </li>
            )) }
          </ul>
        </div>
        <div className={ classNames('col-5', style.copyright) }>
          &copy; Copyright. - <a href={ '/dsa' }>Privacy Policy</a>
        </div>
      </div>
    </footer>
);

export default Footer;
