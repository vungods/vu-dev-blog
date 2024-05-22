type DropdownItemProps = {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  
  const DropdownItem: React.FC<DropdownItemProps> = ({ label, href, onClick }) => {
    return href ? (
      <a
        href={href}
        className="block px-4 py-2 text-sm text-white hover:bg-gradient-to-r from-blue-700 to-blue-950 "
        role="menuitem"
      >
        {label}
      </a>
    ) : (
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left px-4 py-2 text-sm  bg-gradient-to-r from-purple-950 to-black text-yellow-700 hover:bg-gradient-to-r from-cyan-950 to-black "
        role="menuitem"
      >
        {label}
      </button>
    );
  };
  
  export default DropdownItem;
  