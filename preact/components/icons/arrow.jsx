const ArrowIcon = ( { color = 'black', className = '' } ) => (
  <svg
    width='16'
    height='11'
    class={ className }
    viewBox='0 0 16 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 5.5H15M15 5.5L10.5 1M15 5.5L10.5 10'
      stroke={ color }
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default ArrowIcon;
