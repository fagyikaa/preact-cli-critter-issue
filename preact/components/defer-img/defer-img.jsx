import { useEffect, useState } from 'preact/hooks';

const DeferImg = ({
  src = '',
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (<img src={ imgSrc } { ...rest } />);
};

export default DeferImg;
