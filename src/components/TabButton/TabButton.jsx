const TabButton = ({ children, onSelect, isSelected }) => {
  // const handleClick=()=>{
  //   console.log("clicked on button.")
  // }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};
export default TabButton;
