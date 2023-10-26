import React from "react";

const DropdownMenu = ({
  position: string,
  width: number,
  height: number,
  items: Array<{
    label: string,
    onClick: () => void
  }>
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {open ? "Kapat" : "Aç"}
      </button>
      {open && (
        <div
          className="dropdown-menu"
          style={{
            position: position,
            width: width,
            height: height
          }}
        >
          {items.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
