import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="w-full border-t text-secondary py-4 px-6 border-default">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Reyan. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
