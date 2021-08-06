import React, {FC, ReactElement} from 'react';
import {Popover} from '@headlessui/react';
import logo from '../assets/logo.svg';

export const NavBar: FC = (): ReactElement => {
  return (
    <Popover className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Share Land</span>
              <img className="h-10 w-auto sm:h-14" src={logo} alt="Farmland icon" />
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
};
