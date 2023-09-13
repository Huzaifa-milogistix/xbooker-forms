import React from "react";

import LoadingIcon from "./LoadingIcon";

export const LoadingScreen: React.FC = () => {
  return (
    <div className="z-[1999] fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-white">
      <LoadingIcon />
    </div>
  );
};
