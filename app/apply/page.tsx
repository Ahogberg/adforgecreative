import type { Metadata } from 'next';
import { Fragment } from 'react';
import { SiteNav } from '@/components/site-chrome';
import { ApplicationForm } from './application-form';

export const metadata: Metadata = {
  title: 'Apply for Afterword Monthly',
  description: 'Share one expert recording and apply for a founding Afterword membership. No sales call.',
};

const steps = [
  ['1.', 'Apply', ' with one useful source and your commercial context.'],
  ['2.', 'Receive', ' a campaign direction and fit decision by email.'],
  ['3.', 'Approve and pay', '; production begins when intake is complete.'],
];

const summary = [
  'One source asset up to 75 minutes',
  'Premium guide + 12 distribution assets',
  'First delivery within 48 hours of complete intake',
  'One consolidated revision round',
  'No discovery or sales meeting required',
];

export default function ApplyPage() {
  return (
    <main>
      <SiteNav variant="bare" />
      <section className="container apply-layout">
        <div className="apply-copy split-sticky">
          <p>Async application · no calendar link</p>
          <h1 className="display-2">
            Apply in ten minutes.
            <br />
            No call needed.
          </h1>
          <p className="body">
            Tell us what you sell, who it is for, and send one recording. Within a day your editor replies by email with
            the angle we would take, whether we think it is a fit, and how to pay if you want to go ahead.
          </p>

          <div className="apply-summary">
            <p>Afterword Monthly</p>
            <strong className="price-amount">
              $1,500<span>/ month</span>
            </strong>
            <ul>
              {summary.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="numbered-steps">
            {steps.map(([n, lead, rest]) => (
              <Fragment key={n}>
                <span>{n}</span>
                <p>
                  <strong>{lead}</strong>
                  {rest}
                </p>
              </Fragment>
            ))}
          </div>
        </div>

        <ApplicationForm apiUrl={process.env.NEXT_PUBLIC_ADFORGE_API_URL ?? ''} />
      </section>
    </main>
  );
}
