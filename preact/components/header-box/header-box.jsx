import { classNames } from 'common/utils';
import style from './style';

/*
* Posibble props:
* variant = IllustrationHero, Inverted, Flat
* */

const HeaderBox = ( { className, variant = '' } ) => (
  <div className={ style[variant] } >
    <div className={ classNames(style.HeaderBox, className) } />
  </div>
);

export default HeaderBox;
