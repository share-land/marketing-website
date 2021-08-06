import React, {FC, ReactElement} from 'react';
import {NavBar} from './NavBar';

export const Layout: FC = (props): ReactElement => {
  return (
    <div className="relative bg-gray-50">
      <NavBar />
      {props.children}
    </div>
  );
};
