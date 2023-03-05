import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-3xl">
      {children}
    </div>
  );
};

export default Layout;
