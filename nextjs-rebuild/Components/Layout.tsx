import { PropsWithChildren } from "react";
import Nav from "./Nav";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}