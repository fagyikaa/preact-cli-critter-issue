import { Fragment } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import { classNames } from 'common/utils';
import style from './style';

const DropdownBox = ({
  items, slim, isFullScreen, isDesktop, customAttr, onTargetClose,
}) => {
  const ref = useRef();

  useEffect(() => {
    if (!isFullScreen && ref.current) {
      const dropdownWidth = slim ? 300 : 400;
      const parentWidth = ref.current.parentElement.clientWidth;
      const alignLeftOffset = -1 * ((dropdownWidth / 2) - (parentWidth / 2));

      ref.current.style.left = `${alignLeftOffset}px`;
    }
  }, [isFullScreen, slim]);

  return (
    <ul
      class={ classNames(style.dropdownBox, { [style.slim]: slim, [style.desktop]: isDesktop }) }
      ref={ ref }
      data-custom-attr={ customAttr }
    >
      { items.map((item) => (
        <Fragment>
          <li class={ style.dropdownListElemContainer }>
            <a class={ style.dropdownListElem } native={ item.native } href={ item.href } onClick={ onTargetClose } >
            <span class={ style.startAdornment }>
              { item.startAdornment && item.startAdornment }
            </span>
              <p class={ style.content }>
                { item.title }
                <small>{ item.description }</small>
              </p>
              <span class={ style.endAdornment }>
              { item.endAdornment && item.endAdornment }
            </span>
            </a>
          </li>
          <hr class={ style.divider } />
        </Fragment>
      )) }
    </ul>
  );
};

export default DropdownBox;
