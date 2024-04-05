import React from "react";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="tracking-tight scroll-smooth">{children}</main>;
}
