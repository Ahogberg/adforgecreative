import type { Metadata } from 'next';
import Link from 'next/link';
import { ApplicationForm } from './application-form';

export const metadata: Metadata = {
  title: 'Apply for AdForge Monthly',
  description: 'Share one expert source and apply for a founding AdForge Monthly membership.',
};

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <nav className="site-nav">
        <Link className="brand" href="/" aria-label="AdForge home">
          <span className="brand-mark">A</span>
          <span>AdForge</span>
        </Link>
        <Link className="apply-back" href="/">Back to the service</Link>
      </nav>
      <section className="apply-layout">
        <div className="apply-copy">
          <p className="eyebrow">Async application · no calendar link</p>
          <h1>Start without a sales call.<br /><em>We&apos;ll find the campaign.</em></h1>
          <p>
            Give us the commercial context and one piece of expert material. Within 24 hours,
            we reply by email with the angle we would develop, a clear fit decision, and the
            payment step if we should work together.
          </p>
          <div className="apply-summary">
            <span>AdForge Monthly</span>
            <strong>$1,500/month</strong>
            <ul>
              <li>One source asset up to 75 minutes</li>
              <li>Premium guide + 12 distribution assets</li>
              <li>First delivery within 48 hours of complete intake</li>
              <li>One consolidated revision round</li>
              <li>No discovery or sales meeting required</li>
            </ul>
          </div>
          <div className="async-steps" aria-label="How starting works">
            <span>01</span><p><strong>Apply</strong> with one useful source and your commercial context.</p>
            <span>02</span><p><strong>Receive</strong> a campaign direction and fit decision by email.</p>
            <span>03</span><p><strong>Approve and pay</strong>; production begins when intake is complete.</p>
          </div>
        </div>
        <ApplicationForm apiUrl={process.env.NEXT_PUBLIC_ADFORGE_API_URL ?? ''} />
      </section>
    </main>
  );
}
