const leftArrow = ({ className, ...otherProps }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
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
        d='M15 19l-7-7 7-7'
      />
    </svg>
  );
};

export default leftArrow;
