import React, { PropsWithChildren } from "react";

const NoLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
    </>
  );
}

export default NoLayout;
