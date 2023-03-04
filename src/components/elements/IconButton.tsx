import React from "react";

interface Props {
  children: React.ReactElement;
  onClick?: () => void;
}

export const IconButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="w-6 hover:text-amber-500" onClick={onClick}>
      {children}
    </button>
  );
};
