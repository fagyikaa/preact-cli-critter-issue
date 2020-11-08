import { classNames } from 'common/utils';
import theme from 'common/theme';
import { SearchIcon, ArrowIcon } from 'components/icons';
import style from './style';

const ENTER_KEY = 'Enter';

const GetButtonClass = (disabled, inputText) => {
  let className = '';
  if (disabled) {
    className = classNames(style.Darken, style.DefaultBorder);
  } else if (inputText) {
    className = classNames(style.DarkGreen, style.DefaultBorder);
  } else {
    className = style.InheritBackground;
  }
  return className;
};

const Input = ({
  disabled = false, boxClassName = '', placeholderText = '', value = '', onClick, onChange, onEnter,
}) => (
  <div class={ `${style.BaseBox} ${disabled ? style.DisabledBox : ''}  ${boxClassName}`}>
    <div class={style.StartIcon}>
     <SearchIcon color={disabled ? theme.palette.primary.darkest : theme.palette.common.white } />
    </div>
    <div class={ ` ${style.InputField} ${disabled ? style.DisabledInputField : ''}`}>
      <input
        type='text'
        class={style.Input}
        placeholder={ placeholderText }
        onInput={ onChange }
        onKeyDown={ (e) => ENTER_KEY === e.key && onEnter(e) }
        value={ value }
      />
    </div>
    <div class={ `${style.EndButton} ${disabled ? style.DisabledEndButton : ''}`}>
      <button
        class={GetButtonClass(disabled, value)}
        onClick={ onClick }
      >
        <ArrowIcon
          color={disabled ? theme.palette.primary.darkest : theme.palette.common.white }
        />
      </button>
    </div>
  </div>
);

export default Input;
