import React from "react";

const Wrapper = ({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <div
      className={`w-full max-w-[1360px] px-3 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
