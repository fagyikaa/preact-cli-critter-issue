import { useEffect, useState, useRef } from 'preact/hooks';
import {
  AngleIcon
} from 'components/icons';
import Button from 'components/button/button';
import HamburgerButton from 'components/hamburger-button/hamburger-button';
import theme from 'common/theme';
import { classNames } from 'common/utils';
import { contact } from 'common/navigation';
import menuList, { submenu, socialMedia } from './menu-list';
import DropdownBox from './dropdown-box';
import style from './style';

const openDropdown = (listElem) => {
  const listTitle = listElem.children[0];
  const dropdownContainer = listElem.children[1];
  const pageLink = dropdownContainer.children[0];
  const dropdown = dropdownContainer.children[1];

  const listTitleXOffset = listTitle.getBoundingClientRect().x;
  const pageLinkHeight = pageLink.getBoundingClientRect().height;
  const dropdownHeight = dropdown.getBoundingClientRect().height;
  const dropdownContainerPosX = Math.round(dropdownContainer.getBoundingClientRect().x);
  const currentTranslateVal = Number(dropdownContainer.style.transform.substr(12, 2));
  const translateOffset = dropdownContainerPosX + currentTranslateVal;

  pageLink.style.marginLeft = `${listTitleXOffset + 10}px`;
  dropdownContainer.style.transform = `translateX(-${translateOffset}px)`;
  dropdownContainer.style.height = `${pageLinkHeight + dropdownHeight}px`;
  dropdownContainer.style.marginBottom = '-40px';
};

const FullScreenNav = ({
  open, onClose, onTargetClose, ...rest
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const openItem = useRef();

  const eventForMenuOpened = () => {
    const event = new CustomEvent('navbarOpen');
    document.dispatchEvent(event);
  };

  const eventForMenuClosed = () => {
    setTimeout(() => {
      const event = new CustomEvent('navbarClose');
      document.dispatchEvent(event);
    }, 500); // Time of tansition
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add('menuOpen');
      eventForMenuOpened();
    } else {
      document.body.classList.remove('menuOpen');
      eventForMenuClosed();
    }
  }, [open]);

  useEffect(() => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsDesktop(true);
    }
  }, []);

  const onItemClick = (e, index) => {
    if (isDesktop) {
      return;
    }
    // openItem/currentTarget is the li elem
    setOpenDropdownIndex(openDropdownIndex !== index && index);

    if (openItem.current) {
      openItem.current.children[1].style.height = '0';
      openItem.current.children[1].style.marginBottom = '0';

      if (openItem.current !== e.currentTarget) {
        openItem.current = e.currentTarget;
        openDropdown(openItem.current);
      } else {
        openItem.current = null;
      }
    } else {
      openItem.current = e.currentTarget;
      openDropdown(openItem.current);
    }
  };

  return (
    <div class={ classNames(style.fullScreenNav, { [style.open]: open, [style.desktop]: isDesktop }) } {...rest}>
      <div class={ classNames('container', style.container) }>
        <div class={ style.actions }>
          <a href='/' class={ style.logo } onClick={ onTargetClose } >
          </a>
          <Button variant='default' color='primary' onClick={ console.log } className={ style.startNow }>
            Start now
          </Button>
          <HamburgerButton className={ style.hamburger } open onClick={ onClose } />
        </div>
        <div class='row'>
          <nav>
            <ul class={ classNames({ 'col-5': isDesktop }, style.mainList) }>
              {
                menuList.map((item, index) => (
                  <li
                    class={ classNames(style.mainListElem, { [style.listElemOpen]: openDropdownIndex === index }) }
                    onClick={ (e) => onItemClick(e, index) }
                  >
                    { isDesktop
                      && <a href={ item.href } className={ style.listTitle } native={ item.native } onClick={ onTargetClose } >
                        <small className={ style.listIndex }>0{ index + 1 }</small>
                        <span className={ style.title }>{ item.title } <AngleIcon /></span>
                      </a>
                    }
                    { !isDesktop
                      && <div className={ style.listTitle }>
                        <small className={ style.listIndex }>0{ index + 1 }</small>
                        <span className={ style.title }>{ item.title } <AngleIcon /></span>
                      </div>
                    }
                    { Boolean(item.subItems.length) && isDesktop
                    && <DropdownBox
                      onTargetClose={ onTargetClose }
                      items={ item.subItems }
                      slim={ item.slimDropdown }
                      isFullScreen
                      isDesktop={ isDesktop }
                      customAttr={ item.fullscreenDesktopCustomAttr }
                    />
                    }
                    { Boolean(item.subItems.length) && !isDesktop
                      && <div className={ classNames(style.dropdownContainer, { [style.visible]: openDropdownIndex === index }) }>
                        <a
                          href={ item.href }
                          className={ style.pageLink }
                          onClick={ onTargetClose }
                        >
                          Go to { item.title } page
                        </a>
                        <DropdownBox
                          onTargetClose={ onTargetClose }
                          items={ item.subItems }
                          slim={ item.slimDropdown }
                          isFullScreen
                          isDesktop={ isDesktop }
                        />
                      </div>
                    }
                  </li>
                ))
              }
            </ul>
            <hr class={ style.menuDivider } />
            <ul class={ classNames({ 'col-7': isDesktop }, style.subList) }>
              {
                submenu.map((item) => (
                  <li className={ style.subListElem }>
                    <a href={ item.href } onClick={ onTargetClose } >{ item.title }</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div class={ classNames('row', style.footer) }>
          <div class='row'>
            <div class={ classNames('col-12', style.followUs) }>
              Follow <span>Us!</span>
            </div>
          </div>
          <div class='row'>
            <div class={ classNames('col-4', style.socialMenu) }>
              {
                socialMedia.map((item) => (
                  <a href={ item.href } target='_blank' rel='noreferrer' onClick={ onTargetClose } >
                    <span>{ item.title }</span>{ item.icon }
                  </a>
                ))
              }
            </div>
            <div class={ classNames('col-8', style.contact) }>
              {
                contact.map((item) => (
                  <span>{ item }</span>
                ))
              }
              <span class={ style.copyright }>
                &copy; Copyright. -&nbsp;
                <a href={ '/dsdd' } onClick={ onTargetClose }>Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
