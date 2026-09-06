import type { Metadata } from 'next';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import { SubpageNav } from '../site-chrome';

export const metadata: Metadata = { title: 'Application received — Afterword', robots: { index: false, follow: false } };

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ email?: string; ref?: string }> }) {
  const params = await searchParams;
  const email = params.email?.trim() || 'your work email';
  const reference = params.ref?.trim() || 'pending';

  return <main>
    <SubpageNav apply={false} />
    <section className="container thankyou-layout"><div className="thankyou-copy"><p className="section-label">Application received</p><h1>Thank you. Andreas reads it today.</h1><p>You will hear from us by email within 24 hours with the guide we would build from your recording and a straight answer on fit. A confirmation is going to <strong>{email}</strong>.</p><div className="next-steps"><span>1.</span><p><strong>Today.</strong> Your recording and website are read by one person.</p><span>2.</span><p><strong>Within 24 hours.</strong> An email with the angle and a fit decision.</p><span>3.</span><p><strong>If you like it.</strong> Approve and pay for the first month; your review link follows two days after complete intake.</p></div><div className="button-row" style={{marginTop: 36}}><Link className="button button-primary" href="/sample">Read a sample month</Link><Link className="button button-secondary" href="/review">See how review works</Link></div><p className="fineprint">Reference {reference}. Reply to the confirmation email to add anything.</p></div>
      <aside className="confirmation-card"><small>What lands in your inbox</small><h2>We have your application.</h2><p>Thanks for trusting us with your source material. Andreas will review the recording, your website, and the commercial context you shared.</p><p>The next email will contain a proposed guide angle, a clear fit decision, and the payment step if we should work together. No calendar link.</p><div className="confirmation-meta"><span><strong>From:</strong> Andreas at Afterword</span><span><strong>Reply to:</strong> <a className="text-link" href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a></span><span><strong>Reference:</strong> {reference}</span></div></aside>
    </section>
  </main>;
}
