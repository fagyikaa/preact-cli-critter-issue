import { useEffect, useRef, useState } from 'preact/hooks';
import {
  FistIcon,
  Input,
} from 'components';
import theme from 'common/theme';
import style from './style';

const HeroTitleContent = () => {
  const [inputText, setInputText] = useState('');

  const onInputSubmit = () => {
    if (inputText) {
      console.log(inputText);
    }
  };

  return (
    <div class={`${style.HeroTitle} col-4 col-12-md`}>
      <h1>
        <strong>Lorem </strong> ipsum
        <FistIcon color={theme.palette.warning.main} className={ style.FistIcon } />
      </h1>
      <p>
        Lorem ipsum
        <br />
        Dolor sit ament
      </p>
      <Input
        disabled={false}
        boxClassName={`${style.HeroInput} hidden-md` }
        placeholderText='Test testest'
        onClick={ onInputSubmit }
        onEnter={ onInputSubmit }
        onChange={ (e) => { setInputText(e.target.value) } }
        value={ inputText }
      />
      <div className={` hidden-lg ${style.IconScroll}`} />
    </div>
  );
}

const Hero = () => {
  return (
    <header class={style.Hero}>
      <div class={`${style.Wrapper} row`}>
        <HeroTitleContent />
        <div class='col-8'>
          <div class={style.SvgAnimationContainer} id='heroAnimation' />
        </div>
      </div>
      <div class={`row ${style.TrustedBrands} `}>
        <div>
          <p class={style.TrustedBrandsTitle}>
            Lorem test ipsum
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
