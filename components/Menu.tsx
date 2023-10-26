import React from "react";

interface DropdownMenuProps {
  position: string;
  width: number;
  height: number;
  items: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const DropdownMenu = ({
  position,
  width,
  height,
  items,
}: DropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);

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
            position,
            width,
            height,
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
