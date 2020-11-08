import { StarIcon } from 'components/icons';
import { classNames } from 'common/utils';
import style from './style';

const FiveStarsIcon = ({ className }) => (
  <span className={ classNames(style.stars, className) }>
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
  </span>
);

export default FiveStarsIcon;
