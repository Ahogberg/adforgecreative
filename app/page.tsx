/* oxlint-disable next/no-img-element -- vinext's next/image shim currently throws during client hydration */
import Link from 'next/link';
import { Check } from 'lucide-react';
import { MainNav, SiteFooter } from './site-chrome';

const steps = [
  ['1.', 'Share the source', 'Send one webinar, podcast, workshop, keynote, or recorded interview, plus your website and commercial context.'],
  ['2.', 'We find the argument', 'Your editor listens to the whole recording and chooses the one idea strong enough to carry a useful campaign.'],
  ['3.', 'We make the month', 'Writing, source checks, brand application, layout, and quality control happen as one managed workflow.'],
  ['4.', 'Review once, publish', 'You receive one review link. We apply one consolidated revision and deliver finished files.'],
];

const outputs = [
  ['Authority asset', 'Premium guide', 'An editorial 8–16 page PDF built around one useful idea—not a transcript in disguise.', '12-page guide'],
  ['Distribution', 'Eight LinkedIn posts', 'Hooks, arguments, stories, and source-backed insights that point back to the guide.', '8 ready posts'],
  ['Nurture', 'Three emails', 'A concise sequence that delivers value, develops the argument, and opens a conversation.', '3-email sequence'],
  ['Conversion', 'Landing page copy', 'Headline, positioning, proof, form copy, and CTA, clearly labelled for your website.', 'Copy blocks'],
];

const differences = [
  ['Your voice, remembered', 'Your approved material and review decisions become a reusable editorial profile.'],
  ['Every claim traceable', 'Quotes and factual claims point back to a source timestamp for fast, confident review.'],
  ['Finished, not drafted', 'You receive designed, checked, publish-ready files instead of text to assemble yourself.'],
  ['One person owns quality', 'Automation does the heavy lifting; the same editor remains accountable for the final standard.'],
];

const priceItems = [
  'One source recording, up to 75 minutes',
  'One premium 8–16 page guide',
  'Eight LinkedIn posts',
  'Three nurture emails',
  'One landing-page copy package',
  'Brand, source, and layout quality checks',
  'One consolidated revision round',
];

export default function Home() {
  return (
    <main>
      <MainNav />

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="availability"><i /> Three founding memberships open</p>
          <h1>One expert session.<br />One month of content.</h1>
          <p className="lede">Send us a webinar, podcast, workshop, or keynote. Two days later your editor sends back a guide, eight LinkedIn posts, three emails and landing-page copy, written in your voice and ready for one round of review.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/apply">Start without a sales call</Link>
            <Link className="button button-secondary" href="/sample">See a sample month</Link>
          </div>
          <p className="fineprint">No sales call, no prompt writing. You review once and publish.</p>
        </div>
        <aside className="delivery-card" aria-label="Your monthly delivery">
          <div className="delivery-head"><span>What comes back</span><small>Ready in 48h</small></div>
          <div className="source-card"><b>60&apos;</b><div><strong>Your recorded session</strong><span>Webinar, podcast, workshop, or keynote · up to 75 min</span></div></div>
          <div className="becomes"><i />becomes<i /></div>
          <ul>
            <li><span>Premium guide <small>· 8–16 pages</small></span><b>1</b></li>
            <li><span>LinkedIn posts</span><b>8</b></li>
            <li><span>Nurture emails</span><b>3</b></li>
            <li><span>Landing-page copy</span><b>1</b></li>
          </ul>
          <div className="delivery-foot"><span>One consolidated revision</span><strong>$1,500<small>/month</small></strong></div>
        </aside>
      </section>

      <section className="audience-band"><div className="container"><span>Built for</span><p>Small consultancies, advisory boutiques and training firms that already run webinars, podcasts or workshops, and have nobody whose job it is to turn them into content.</p></div></section>

      <section className="split-section container" id="how">
        <div className="section-intro sticky"><h2>How a recording becomes a month of content</h2><p>We listen to the whole recording, pull out the ideas worth publishing, write everything, apply your brand and send finished files. Every claim stays tied to the minute it was said.</p></div>
        <ol className="steps-list">{steps.map(([n, title, text]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
      </section>

      <section className="paper-two" id="output"><div className="container section-pad">
        <div className="section-heading"><div><p className="section-label">What you get each month</p><h2>Thirteen pieces, all from the same hour of talking</h2></div><p>Everything shares one argument, one voice and one call to action, so it reads like a campaign rather than a pile of posts. <Link className="text-link" href="/sample">Read a sample month →</Link></p></div>
        <div className="output-grid">{outputs.map(([label, title, text, preview], index) => <article className="output-card" key={title}><div className={`output-preview preview-${index + 1}`}><span>{preview}</span></div><p>{label}</p><h3>{title}</h3><div>{text}</div></article>)}</div>
      </div></section>

      <section className="editor-section container">
        <div className="editor-photo"><img src="/editor-portrait.webp" alt="Andreas, founder and editor at Afterword" /><div><strong>Andreas, editor</strong><span>The same person every month</span></div></div>
        <div><h2>Why not just use ChatGPT?</h2><p className="editor-lede">You could, and you would get drafts. We use AI for transcription, extraction, and first passes too. The difference is that one editor reads all of it, checks every claim, fixes the argument, and signs off before you see anything. Your job is to approve, not to manage.</p><div className="difference-grid">{differences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="founder-note paper-two"><div className="container"><p className="section-label">A note from the founder</p><div><p>I started Afterword because I kept watching small firms give a genuinely good hour of talk to forty people, and then never use it again. The recording sat in a folder. The insight went nowhere.</p><p>This is a small service on purpose. I take a few clients, read every word before it goes out, and would rather turn down a project than hand over something I would not publish myself.</p><div className="signature"><img src="/editor-portrait.webp" alt="" width="44" height="44" /><span><strong>Andreas Högberg</strong><small>Founder and editor, Afterword</small></span></div></div></div></section>

      <section className="pricing" id="pricing"><div className="container pricing-grid">
        <div><p className="section-label">Founding membership</p><h2>One plan, one price, no open-ended retainer</h2><p>One recording a month. The scope is fixed, so there are no hours to track and nothing to negotiate. Anything outside it is quoted before we start.</p><div className="addons"><div><span>Additional source asset</span><b>+$950</b></div><div><span>Publishing and integrations</span><b>Quoted</b></div></div></div>
        <div className="price-card"><div className="price-head"><span><small>Afterword Monthly</small><b>Founding member rate</b></span><strong>$1,500<small>/ month</small></strong></div><ul>{priceItems.map(item => <li key={item}><Check size={18} />{item}</li>)}</ul><Link className="button button-primary button-full" href="/apply">Apply for a founding spot</Link><p>First review link within 48 hours after complete intake.</p></div>
      </div></section>

      <section className="faq-section container"><div><p className="section-label">Before you apply</p><h2>Questions we get asked</h2></div><div className="faq-list">
        <details><summary>Do we need a sales call?</summary><p>No. Apply with a source link and your commercial context. We reply by email with the campaign direction, scope, and payment step. If it fits, you can approve and start without a meeting.</p></details>
        <details><summary>What counts as a source asset?</summary><p>A recorded webinar, podcast, workshop, keynote, interview, or presentation with enough original expertise to develop a useful point of view.</p></details>
        <details><summary>Does AI write everything?</summary><p>Automation handles transcription, extraction, first drafts, consistency checks, and production. Your editor remains responsible for the narrative, factual flags, and final quality.</p></details>
        <details><summary>Can you match our brand?</summary><p>Yes. We establish a reusable profile from your website, brand files, approved examples, tone, and the decisions you make during review.</p></details>
        <details><summary>Is this a long-term contract?</summary><p>No. It is a monthly service. The deliberately fixed scope makes it easy to continue when it is useful and stop when it is not.</p></details>
      </div></section>

      <section className="final-cta paper-two"><h2>Send us a recording and we&apos;ll tell you what we&apos;d make of it</h2><p>A public link and your website are enough. Within a day you get an email with the guide we would build from it and a straight answer on fit.</p><Link className="button button-primary" href="/apply">Start without a sales call</Link></section>
      <SiteFooter />
    </main>
  );
}
