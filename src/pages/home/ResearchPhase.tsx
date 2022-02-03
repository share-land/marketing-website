import React, {FC, ReactElement} from 'react';
import {researchPhase} from './content';
import researchImage from '../../assets/research.jpeg';

export const ResearchPhase: FC = (): ReactElement => {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src={researchImage}
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-primary-300 tracking-wide uppercase">
            {researchPhase.heading}
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">{researchPhase.researchTopics}</p>
          <p className="mt-5 text-lg text-gray-300">{researchPhase.description}</p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {researchPhase.researchAreas.map((researchArea, index) => (
              <p key={index}>
                <span className="block text-2xl font-bold text-white">{researchArea.title}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{researchArea.emphasis} </span>
                  {researchArea.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
