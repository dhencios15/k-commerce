const BaseButton = ({ name, margin, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ${margin}`}
    >
      {name}
    </button>
  );
};

export default BaseButton;
