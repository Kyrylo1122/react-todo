export const IconBtn = ({ onClick, children, ...allyProps }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
