import type { Metadata } from 'next';
import { SiteFooter, SubpageNav } from '../site-chrome';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Terms — Afterword',
  description: 'The terms for an Afterword Monthly membership: scope, delivery, payment, cancellation and ownership.',
};

export default function TermsPage() {
  return <main>
    <SubpageNav />
    <section className="subpage-hero container">
      <div>
        <p className="section-label">Terms</p>
        <h1>A monthly service with a fixed scope.</h1>
      </div>
      <p className="hero-side">These terms apply when you start an Afterword Monthly membership. They are written to be read, not to be found later.</p>
    </section>

    <section className="paper-two">
      <div className="container legal-page">
        <p className="legal-updated">Last updated 9 October 2026</p>

        <section>
          <h2>Who you are working with</h2>
          <p>Afterword Monthly is provided by Andreas Högberg, operating under the name Afterword (“we”). You (“the client”) are the business that applies and pays for the membership. Contact <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a> about anything in these terms.</p>
        </section>

        <section>
          <h2>What each month includes</h2>
          <p>Each month, you send one recording you own or have the right to use: a webinar, podcast episode, workshop or talk. From it we produce one campaign:</p>
          <ul>
            <li>A designed guide (typically 8–16 pages) as a PDF.</li>
            <li>Eight LinkedIn posts, each with a visual, and a LinkedIn carousel.</li>
            <li>Three emails and labelled landing-page copy.</li>
            <li>Short motion clips, and captioned speaker clips when you send the audio or video file.</li>
          </ul>
          <p>The scope is fixed. Additional recordings, extra formats or custom work are quoted separately before any work starts.</p>
        </section>

        <section>
          <h2>Delivery and revisions</h2>
          <p>We send a private review link within 48 hours of complete intake: the recording, your website, and answers to the intake questions. You then have one consolidated revision round: send all changes together, and we deliver the final files after applying them. Further changes after the final delivery count toward the next month.</p>
          <p>Every quote and figure is checked against your recording. You remain responsible for approving the content before you publish it, including any claims about your own business, clients or results.</p>
        </section>

        <section>
          <h2>Price and payment</h2>
          <p>The founding membership is US$1,500 per month, billed in advance each month through our payment provider. The founding rate stays the same for as long as your membership continues without a break. Production for a month starts once that month’s payment has been received.</p>
          <p>Prices exclude any taxes that apply to you, such as VAT or sales tax, which are added where required.</p>
        </section>

        <section>
          <h2>Cancelling</h2>
          <p>There is no minimum term. You can cancel at any time by email; the cancellation takes effect at the end of the month you have paid for, and you are not charged again. Paid months are not refunded once the review link for that month has been sent. If we cannot deliver a month you have paid for, we refund that month in full.</p>
          <p>We may end the membership with 30 days’ notice, or immediately if payment fails and is not resolved within 14 days, or if a recording would require us to publish unlawful or misleading content.</p>
        </section>

        <section>
          <h2>Ownership and use</h2>
          <p>You keep all rights to your recordings and materials. Once a month is paid for, the finished files we deliver for it are yours to use, edit and publish without restriction or attribution.</p>
          <p>We keep the right to our templates, design system, software and methods, which are not transferred. Client campaigns are confidential: we never publish your work or name you as a client without your written permission.</p>
        </section>

        <section>
          <h2>Your materials and confidentiality</h2>
          <p>You confirm that you have the right to give us the recordings, logos and other materials you send. We use them only to deliver your membership, keep them confidential, and process personal information as described in our <a href="/privacy">privacy notice</a>. We use carefully selected software providers, including AI services, to transcribe and draft; they process your material only to provide that service to us.</p>
        </section>

        <section>
          <h2>Liability</h2>
          <p>We deliver the service with reasonable care and skill. To the extent the law allows, our total liability for any claim relating to the membership is limited to the fees you paid in the three months before the claim, and neither party is liable for indirect losses such as lost profit or lost business. Nothing in these terms limits liability that cannot be limited by law.</p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>If we change these terms, we will email active clients at least 30 days before the change takes effect. You can cancel before then if you do not accept the change.</p>
        </section>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
