import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { SiteNav } from '@/components/site-chrome';
import { EmailPreview } from './email-preview';

export const metadata: Metadata = {
  title: 'Application received — Afterword',
  description: 'Thank you. Your editor reads your application today and replies within 24 hours.',
  robots: { index: false },
};

const steps = [
  ['1.', 'Today.', ' Your recording and website are read by one person. Nothing is shared.'],
  ['2.', 'Within 24 hours.', ' An email with the angle and a fit decision.'],
  ['3.', 'If you like it.', ' Pay for the first month; first review link two days later.'],
];

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; ref?: string }>;
}) {
  const { email, ref } = await searchParams;

  return (
    <main>
      <SiteNav variant="bare" />
      <section className="container thanks-layout">
        <div className="split-sticky">
          <p className="label">Application received</p>
          <h1 className="display-2">Thank you. Anders reads it today.</h1>
          <p className="body">
            You will hear from us by email within 24 hours with the guide we would build from your recording, and a
            straight answer on fit.
            {email ? (
              <>
                {' '}
                A confirmation is on its way to <b>{email}</b>.
              </>
            ) : (
              ' A confirmation is on its way to the address you gave us.'
            )}
          </p>

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

          <div className="thanks-actions">
            <Link className="button button-primary" href="/sample">
              Read a sample month
            </Link>
            <Link className="button button-secondary" href="/review">
              See how review works
            </Link>
          </div>

          <p className="thanks-ref">
            {ref ? `Reference ${ref}. ` : ''}Reply to the confirmation email to add anything.
          </p>
        </div>

        <div>
          <p className="caption caption-top">The confirmation email</p>
          <div className="email-preview">
            <div className="email-preview-bar">
              <span>
                <b>From</b> Anders at Afterword
              </span>
              <span>
                <b>Subject</b> We have your application
              </span>
            </div>
            <EmailPreview src="/emails/application-confirmation.html" title="Confirmation email" />
          </div>
        </div>
      </section>
    </main>
  );
}
