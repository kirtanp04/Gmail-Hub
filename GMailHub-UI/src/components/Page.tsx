import { Fragment } from "react/jsx-runtime";
import Header from "./PageHeader";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
