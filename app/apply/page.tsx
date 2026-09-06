import type { Metadata } from 'next';
import { brand } from '@/lib/brand';
import { SubpageNav } from '../site-chrome';
import { ApplicationForm } from './application-form';

export const metadata: Metadata = {
  title: 'Apply for Afterword Monthly',
  description: 'Share one expert source and apply for a founding Afterword Monthly membership.',
};

export default function ApplyPage() {
  return (
    <main>
      <SubpageNav />
      <section className="apply-layout container">
        <div className="apply-copy">
          <p className="section-label">Async application · no calendar link</p>
          <h1>Start without a sales call. We&apos;ll find the campaign.</h1>
          <p>
            Give us the commercial context and one piece of expert material. Within 24 hours,
            we reply by email with the angle we would develop, a clear fit decision, and the
            payment step if we should work together.
          </p>
          <div className="apply-summary">
            <span>Afterword Monthly</span>
            <strong>$1,500/month</strong>
            <ul>
              <li>One source asset up to 75 minutes</li>
              <li>Premium guide + 12 distribution assets</li>
              <li>First delivery within 48 hours of complete intake</li>
              <li>One consolidated revision round</li>
              <li>No discovery or sales meeting required</li>
            </ul>
          </div>
        </div>
        <ApplicationForm apiUrl={process.env.NEXT_PUBLIC_ADFORGE_API_URL ?? ''} contactEmail={brand.contactEmail} />
      </section>
    </main>
  );
}
