import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { AngleIcon } from 'components/icons';
import Button from 'components/button/button';
import HamburgerButton from 'components/hamburger-button/hamburger-button';
import theme from 'common/theme';
import { throttle } from 'common/utils';
import menuList from './menu-list';
import DropdownBox from './dropdown-box';
import FullScreenNav from './full-screen-nav';
import style from './style';

const Navbar = ({ stickyOffset = 200 }) => {
  const [stickyClasses, setStickyClasses] = useState('');
  const [isOpenFullScreen, setIsOpenFullScreen] = useState(false);

  useEffect(() => {
    const scrollCb = throttle(() => {
      if (!stickyClasses && window.scrollY >= stickyOffset) {
        setStickyClasses(`${style.slideIn} ${style.stickyStyle}`);
      } else if (stickyClasses.includes(style.slideIn) && window.scrollY <= stickyOffset) {
        setStickyClasses(`${style.slideOut} ${style.stickyStyle}`);
        setTimeout(() => setStickyClasses(style.slideOut), 500);
        setTimeout(() => setStickyClasses(''), 1000);
      }
    }, 50);

    document.addEventListener(
      'scroll',
      scrollCb,
      { passive: true },
    );

    return () => document.removeEventListener('scroll', scrollCb);
  }, [stickyClasses, stickyOffset]);

  const DisappearFullScreenNav = (e) => {
    if (e.target) {
      setIsOpenFullScreen(false);
    }
  };

  return (
    <Fragment>
      <div class={ `${style.nav} container ${stickyClasses}` }>
        <a href='/' class={ style.logo }>
        </a>
        <span class={ style.actions }>
          <nav>
            <ul class={ style.mainList }>
              {
                menuList.map((item) => (
                  <li class={ style.mainListElem }>
                    <a href={ item.href } native={ item.native }>{ item.title } <AngleIcon className={ style.angleDown } /></a>
                    { Boolean(item.subItems.length)
                      && <DropdownBox items={ item.subItems } slim={ item.slimDropdown } />
                    }
                  </li>
                ))
              }
            </ul>
          </nav>
          <Button variant='default' color='primary' onClick={ console.log } className={ style.startNow }>
            Start now
          </Button>
          <HamburgerButton
            className={ style.hamburger }
            onClick={ () => setIsOpenFullScreen(!isOpenFullScreen) }
            open={ isOpenFullScreen }
          />
        </span>
      </div>
      <FullScreenNav
        open={ isOpenFullScreen }
        onClose={ () => setIsOpenFullScreen(!isOpenFullScreen) }
        onTargetClose={ (e) => DisappearFullScreenNav(e) }
      />
    </Fragment>
  );
};

export default Navbar;
