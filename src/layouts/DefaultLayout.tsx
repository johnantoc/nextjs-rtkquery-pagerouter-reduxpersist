import { ReactElement } from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex min-w-screen min-h-screen flex-col relative">
      {children}
    </div>
  );
}

DefaultLayout.defaultProps = {
  children: null,
};

export default DefaultLayout;
