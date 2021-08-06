import React, {FC, ReactElement} from 'react';
import {UsersIcon, GlobeAltIcon, QuestionMarkCircleIcon} from '@heroicons/react/outline';
import {whyWhatHow} from './content';

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

const iconMap: Record<string, HeroIcon> = {
  Why: QuestionMarkCircleIcon,
  What: GlobeAltIcon,
  How: UsersIcon,
};

const sectionsWithIcons = whyWhatHow.sections.map((section) => ({
  ...section,
  icon: iconMap[section.name],
}));

export const WhyWhatHow: FC = (): ReactElement => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">{whyWhatHow.heading}</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {sectionsWithIcons.map((section) => (
            <div key={section.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <section.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{section.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {section.description}
                {(section.quotes || []).map((quote, quoteIndex) => (
                  <figure key={quoteIndex} className="mt-4">
                    <blockquote cite={quote.cite}>
                      <p>{quote.text}</p>
                    </blockquote>
                    <figcaption>— {quote.author}</figcaption>
                  </figure>
                ))}
                {section.bulletPoints && (
                  <ul className="mt-6 list-disc pl-4">
                    {section.bulletPoints.map((bulletPoint, bulletPointIndex) => (
                      <li key={bulletPointIndex} className="text-sm mt-2">
                        {bulletPoint}
                      </li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <ul className="mt-6">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
