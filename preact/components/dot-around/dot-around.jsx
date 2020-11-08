import { classNames } from 'common/utils';
import style from './style';

// -variant: rightBottom, rightTop - default, leftBottom, leftTop

const DotAround = ({ className = '', variant = 'rightTop' }) => (
    <div class={classNames(style.DotAround, className, style[variant])} />
);

export default DotAround;
