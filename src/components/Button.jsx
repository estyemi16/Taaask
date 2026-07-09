const Button = ({ value, icon, css, onClick, handleSubmit, type = "button" }) => {
  const handleClick = (event) => {
    if (handleSubmit) {
      handleSubmit(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`rounded-md flex items-center ${css} ${icon ? "gap-2" : ""} bg-secondary-purple  hover:bg-secondary-purple/70 transition-all duration-300 ease-in-out hover:cursor-pointer   px-4 text-white text-xl`}
    >
      <p className="">{icon ? icon : null}</p>
      <span> {value}</span>
    </button>
  );
};

export default Button;
