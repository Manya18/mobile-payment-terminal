import Header from "./Header";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
