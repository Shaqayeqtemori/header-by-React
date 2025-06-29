import React, { useState } from "react";

export default function Header({ title = "My Header", links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">{title}</div>

      <nav className="hidden md:flex gap-4">
        {links.map((link, index) => (
          <a key={index} href={link.href} >
            {link.label}
          </a>
        ))}
      </nav>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 flex flex-col items-center md:hidden">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-2 border-b w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
