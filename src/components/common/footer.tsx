import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="w-full text-secondary pb-4 px-6 border-default">
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Reyan Rahman</p>
      </div>
    </footer>
  );
});

export default Footer;
