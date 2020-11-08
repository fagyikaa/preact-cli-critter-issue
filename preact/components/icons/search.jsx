const SearchIcon = ( { color = 'white', className = '' } ) => (
  <svg
    width='14'
    height='14'
    class={ className }
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='6' cy='6' r='5'
      stroke={ color }
      stroke-width='2'
    />
    <path
      d='M10 10L13 13'
      stroke={ color }
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    W />
  </svg>
);

export default SearchIcon;
