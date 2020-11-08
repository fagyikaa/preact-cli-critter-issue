import style from './style';

/* Possible props:
* -tileHeader: Any render able node
* -subTitle: string text for the p tag.
* */

const Title = ({ titleHeader, subTitle, className = ''}) => (
  <header class={`${className}`}>
    <h2 class={style.TitleHeader} >{ titleHeader }</h2>
    <p class={style.SubTitle} >
      {subTitle}
    </p>
  </header>
);

export default Title;
