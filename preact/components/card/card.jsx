import { classNames } from 'common/utils';
import style from './style';

const BaseCard = ( {
  children, className = '', onClick, ...rest
} ) => (
  <div className={ classNames(style.Card, className) } onClick={ onClick } {...rest} >
    { children }
  </div>
);

export default BaseCard;
