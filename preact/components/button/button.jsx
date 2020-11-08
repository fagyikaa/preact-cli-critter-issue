import { classNames } from 'common/utils';
import style from './style';

// Possible props:
// -default variant with primary/secondary color
// -outlined variant with primary color
// -href to <a> component

const ButtonElement = ({ childern, ...rest }) => (<button {...rest}>{childern}</button>);
const LinkElement = ({ childern, ...rest }) => (<a {...rest}>{childern}</a>);

const Button = ({
  children,
  variant = 'default',
  color = 'secondary',
  disabled = false,
  className = '',
  onClick,
  href,
  target,
}) => {
  const CurrentElement = href ? LinkElement : ButtonElement;

  return (
    <CurrentElement
      class={ classNames(style.button, style[variant], style[color], { [style.disabled]: disabled }, className) }
      onClick={ onClick }
      href={ href }
      target={ target }
    >
      { children }
    </CurrentElement>
  );
};

export default Button;
