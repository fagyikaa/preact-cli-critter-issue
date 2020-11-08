import { classNames } from 'common/utils';
import style from './style';

const Open = () => (
  <span class={ classNames(style.icon, style.open) }>
    <hr />
    <hr />
    <hr />
  </span>
);

const Close = () => (
  <span className={ classNames(style.icon, style.close) }>
    <hr />
    <hr />
  </span>
);

const HamburgerButton = ({
  open = false,
  disabled = false,
  className = '',
  onClick,
}) => (
  <button
    class={ classNames(style.hamburgerButton, className, { [style.disabled]: disabled } ) }
    onClick={ onClick }
  >
    {
      open
        ? <Close />
        : <Open />
    }
  </button>
);

export default HamburgerButton;
