import React from 'react';

function NavItem({ page, activePage, onClick, children }) {
  return (
    <a
      href="#"
      className={`text-black ${activePage === page ? "border-b-2 border-black pb-[2%]" : ""}`}
      onClick={() => onClick(page)}
    >
      {children}
    </a>
  );
}

export default NavItem;
