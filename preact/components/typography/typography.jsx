import { createElement } from 'preact';
import { classNames } from 'common/utils';
import style from './style';

const Typography = ({
  variant = 'p',
  color = 'primary',
  children,
  className,
}) => createElement(
  variant,
  { className: classNames(style.typography, className, { [style.dark]: color === 'dark' }) },
  children,
);

export default Typography;
