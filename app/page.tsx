import {
  ArrowRight,
  Check,
  FileCheck2,
  Fingerprint,
  MessageSquareText,
  Quote,
  ShieldCheck,
  Sparkles,
  TimerReset,
  WandSparkles,
} from 'lucide-react';
import Link from 'next/link';

const workflow = [
  ['01', 'Share the source', 'Send one webinar, podcast, workshop, keynote, or recorded interview.'],
  ['02', 'We find the signal', 'We map the strongest ideas, quotes, claims, and commercial narrative back to the source.'],
  ['03', 'The campaign is forged', 'Editorial writing, brand application, layout, and quality checks happen as one workflow.'],
  ['04', 'Review once, publish', 'You receive a single review link and finished files after one consolidated revision.'],
];

const deliverables = [
  ['01', 'Authority asset', 'Premium guide', 'An editorial 8–16 page PDF shaped around one useful idea—not a webinar transcript in disguise.'],
  ['02', 'Distribution', 'Eight LinkedIn posts', 'Hooks, arguments, stories, and source-backed insight posts that point back to the core asset.'],
  ['03', 'Nurture', 'Three-email sequence', 'A concise sequence that delivers value, develops the argument, and opens a commercial conversation.'],
  ['04', 'Conversion', 'Landing page copy', 'Headline, positioning, proof, form copy, and CTA supplied ready for your website or campaign tool.'],
];

const difference = [
  [Fingerprint, 'Your voice, remembered', 'We establish a reusable brand profile from your approved material and decisions.'],
  [Quote, 'Every claim traceable', 'Quotes and factual claims point back to a source timestamp for fast, confident review.'],
  [FileCheck2, 'Finished—not drafted', 'You receive designed, checked, publish-ready files rather than text to assemble yourself.'],
  [ShieldCheck, 'A human owns quality', 'Automation does the heavy lifting; an editor remains accountable for the final standard.'],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top" aria-label="AdForge home">
          <span className="brand-mark">A</span>
          <span>AdForge</span>
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#system">The system</a>
          <a href="#membership">Membership</a>
          <Link className="nav-cta" href="/apply">
            Apply for a pilot
          </Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> Three founding memberships · September</p>
          <h1>
            One expert session.<br />
            <em>One month of content.</em>
          </h1>
          <p className="hero-lede">
            Send us a webinar, podcast, workshop, or keynote. In 48 hours, receive a
            publication-ready campaign built in your voice and ready for review.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/apply">
              Start without a sales call <ArrowRight size={16} />
            </Link>
            <a className="button button-secondary" href="#system">See the system</a>
          </div>
          <p className="hero-note">No sales call. No prompt writing. One focused review round.</p>
        </div>

        <aside className="bundle-card" aria-label="Your monthly content bundle">
          <div className="bundle-head">
            <span>Monthly content bundle</span>
            <span className="status"><i /> Ready in 48h</span>
          </div>
          <div className="source-row">
            <div className="source-icon">60</div>
            <div>
              <strong>Your expert source</strong>
              <span>Up to 75 minutes</span>
            </div>
          </div>
          <div className="forge-line"><span>AdForge editorial system</span></div>
          <ul className="deliverable-preview">
            <li><Check size={14} /> Premium guide <b>01</b></li>
            <li><Check size={14} /> LinkedIn posts <b>08</b></li>
            <li><Check size={14} /> Nurture emails <b>03</b></li>
            <li><Check size={14} /> Landing page copy <b>01</b></li>
          </ul>
          <div className="bundle-foot">
            <span>One consolidated revision</span>
            <strong>$1,500/mo</strong>
          </div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Service highlights">
        <span><b>01</b> source asset</span>
        <span><b>13+</b> publish-ready outputs</span>
        <span><b>48h</b> first delivery</span>
        <span><b>01</b> focused review round</span>
      </section>

      <section className="audience-line">
        <span>Built for</span>
        <p>Consultancies</p><i />
        <p>Professional services</p><i />
        <p>Training firms</p><i />
        <p>Industry experts</p>
      </section>

      <section className="section system-section" id="system">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The AdForge system</p>
            <h2>From raw expertise to <em>ready-to-publish.</em></h2>
          </div>
          <p>
            We extract the strongest ideas, preserve the source, write the campaign,
            apply your brand, and deliver finished assets—not another folder of AI drafts.
          </p>
        </div>
        <div className="workflow-grid">
          {workflow.map(([number, title, description]) => (
            <article className="workflow-card" key={number}>
              <span>{number} / 04</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section deliverables-section" id="deliverables">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Your monthly output</p>
            <h2>One connected campaign.<br /><em>Thirteen useful assets.</em></h2>
          </div>
          <p>Every piece is developed from the same source narrative, voice, and call to action.</p>
        </div>
        <div className="deliverables-grid">
          {deliverables.map(([number, label, title, description]) => (
            <article className="deliverable-card" key={number}>
              <div><span>{number}</span><small>{label}</small></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section difference-section">
        <div className="difference-intro">
          <p className="eyebrow">Why not just use ChatGPT?</p>
          <h2>AI can make drafts.<br /><em>We make delivery inevitable.</em></h2>
          <p>
            AdForge combines automation with editorial judgment, design, source control,
            and an accountable deadline. You approve the work instead of managing the work.
          </p>
        </div>
        <div className="difference-list">
          {difference.map(([Icon, title, description]) => {
            const DifferenceIcon = Icon as typeof Fingerprint;
            return (
              <article key={String(title)}>
                <DifferenceIcon size={20} />
                <div><h3>{String(title)}</h3><p>{String(description)}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section pricing-section" id="membership">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Founding membership</p>
            <h2>A dependable monthly system.<br /><em>Not another agency retainer.</em></h2>
          </div>
          <p>Start with one source asset each month. Clear scope, one reviewer, no surprise hours.</p>
        </div>
        <div className="pricing-layout">
          <div className="price-card">
            <div className="price-top">
              <div><span>AdForge Monthly</span><small>Founding member rate</small></div>
              <strong>$1,500 <small>/ month</small></strong>
            </div>
            <div className="price-body">
              <ul>
                <li><Check size={15} /> One source recording, up to 75 minutes</li>
                <li><Check size={15} /> One premium 8–16 page guide</li>
                <li><Check size={15} /> Eight LinkedIn posts</li>
                <li><Check size={15} /> Three nurture emails</li>
                <li><Check size={15} /> One landing page copy package</li>
                <li><Check size={15} /> Brand, source, and layout quality checks</li>
                <li><Check size={15} /> One consolidated revision round</li>
              </ul>
              <div className="price-action">
                <p><TimerReset size={16} /> First delivery within 48 hours after complete intake.</p>
                <Link className="button button-primary" href="/apply">
                  Apply for a founding spot <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <aside className="scope-card">
            <span>Built to stay simple</span>
            <h3>The boundaries are part of the product.</h3>
            <p>One source, one decision-maker, one review round. Extra recordings and formats are quoted before work begins.</p>
            <div><b>+$950</b><small>Additional source asset</small></div>
            <div><b>+$350</b><small>48-hour rush delivery</small></div>
            <div><b>Custom</b><small>Publishing and integrations</small></div>
          </aside>
        </div>
      </section>

      <section className="section proof-section">
        <div>
          <MessageSquareText size={25} />
          <blockquote>“The valuable part is not generating more words. It is turning expertise we already have into a campaign our team can actually ship.”</blockquote>
          <p>AdForge service principle</p>
        </div>
      </section>

      <section className="section faq-section">
        <div>
          <p className="eyebrow">Before you apply</p>
          <h2>Clear answers.<br /><em>No sales theatre.</em></h2>
        </div>
        <div className="faq-list">
          <details><summary>Do we need a sales call?</summary><p>No. Apply with a source link and your commercial context. We reply by email with the campaign direction, scope, and payment step. If it fits, you can approve and start without booking a meeting.</p></details>
          <details><summary>What counts as a source asset?</summary><p>A recorded webinar, podcast, workshop, keynote, interview, or presentation with enough original expertise to develop a useful point of view.</p></details>
          <details><summary>Does AI write everything?</summary><p>Automation handles transcription, extraction, first drafts, consistency checks, and production. An editor remains responsible for the narrative, factual flags, and final quality.</p></details>
          <details><summary>Can you match our brand?</summary><p>Yes. We establish a reusable profile from your website, brand files, approved examples, tone, and the decisions you make during review.</p></details>
          <details><summary>What if we do not have a webinar every month?</summary><p>Your source can also be a podcast, workshop, keynote, interview, or existing presentation. The subscription is built around one substantial expert source—not one specific format.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-orbit" aria-hidden="true"><WandSparkles /></div>
        <p className="eyebrow">Three founding memberships available</p>
        <h2>Bring the expertise.<br /><em>We&apos;ll forge the campaign.</em></h2>
        <p>Send a public source link and your company website. We will reply with the angle we would build—not a generic AI sample.</p>
        <Link className="button button-primary" href="/apply">
          Start without a sales call <ArrowRight size={16} />
        </Link>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">A</span><span>AdForge</span></a>
        <p>Expertise in. Campaign out.</p>
        <a href="mailto:hello@adforgecreative.com">hello@adforgecreative.com</a>
      </footer>
    </main>
  );
}
