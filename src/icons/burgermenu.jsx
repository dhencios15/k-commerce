const burgermenu = ({ className, ...otherProps }) => {
  return (
    <svg
      className={`${className} w-6 h-6`}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...otherProps}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
};

export default burgermenu;
