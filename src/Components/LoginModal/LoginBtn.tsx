import React, { FC, PropsWithChildren } from 'react';

type StyleProps = PropsWithChildren & {
  styles: React.CSSProperties
}

export const LoginBtn:FC<StyleProps> = ({children, styles}) => {
  return (
    <p className="text-center"><button className="rounded-2 CountinueBtn py-1 fw-bold py-2" style={styles}>{children}</button></p>
  );
};
