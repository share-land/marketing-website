import React, {FC, ReactElement} from 'react';
import {Hero} from './home/Hero';
import {WhyWhatHow} from './home/WhyWhatHow';
import {ResearchPhase} from './home/ResearchPhase';
import {FAQ} from './home/FAQ';
import {JoinUs} from './home/JoinUs';

const Home: FC = (): ReactElement => {
  return (
    <main>
      <Hero />
      <WhyWhatHow />
      <ResearchPhase />
      <FAQ />
      <JoinUs />
    </main>
  );
};

export default Home;
