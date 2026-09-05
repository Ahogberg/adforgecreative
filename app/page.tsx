import { Check, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter, SiteNav } from '@/components/site-chrome';
import { siteConfig, spotsLine } from '@/lib/site-config';

const steps = [
  ['1.', 'Send us a recording', 'A webinar, podcast episode, workshop, keynote or interview. A public link is enough.'],
  [
    '2.',
    'We find the argument',
    'Your editor listens through, picks the strongest idea and notes the quotes and claims that support it, with timestamps.',
  ],
  [
    '3.',
    'We write and lay it out',
    'Guide, posts, emails and landing page copy are written together, in your brand, and checked before you see them.',
  ],
  ['4.', 'You review once', 'One review link, one round of changes, then finished files land in your inbox.'],
];

const outputs = [
  [
    'guide cover',
    'Authority asset',
    'Premium guide',
    'An 8 to 16 page PDF built around the one idea worth reading, with your examples as evidence.',
  ],
  [
    'post preview',
    'Distribution',
    'Eight LinkedIn posts',
    "Written in the speaker's voice. Each stands on its own and points back to the guide.",
  ],
  [
    'email preview',
    'Nurture',
    'Three-email sequence',
    'The first delivers the guide, the second develops the idea, the third asks for a conversation.',
  ],
  [
    'landing page',
    'Conversion',
    'Landing page copy',
    'Headline, intro, proof and form copy, labelled so whoever runs your website can place it.',
  ],
];

const difference = [
  ['We learn how you sound', 'Your approved material and review notes build a profile we reuse every month.'],
  ['Every claim has a timestamp', 'Quotes and figures link back to the minute in the recording, so review is quick.'],
  ['You get finished files', 'Designed, proofed and ready to publish. Nothing to assemble on your side.'],
  ['One editor is responsible', 'A named person owns the quality and the deadline, and answers your email.'],
];

const priceItems = [
  'One source recording, up to 75 minutes',
  'One premium 8–16 page guide',
  'Eight LinkedIn posts',
  'Three nurture emails',
  'One landing page copy package',
  'Brand, source, and layout quality checks',
  'One consolidated revision round',
];

const addOns = [
  ['Additional source asset', '+$950'],
  ['24-hour delivery', '+$350'],
  ['Publishing and integrations', 'Quoted'],
];

/**
 * Placeholder copy. Replace each quote with a real, permission-cleared one
 * before turning `showTestimonials` on.
 */
const testimonials = [
  [
    '[Client quote goes here once the first founding month has shipped. Keep it in their words, two or three sentences.]',
    'Managing partner',
    '11-person advisory firm, London',
  ],
  [
    '[Second client quote. Ideally about something specific: the review link, the timestamps, how the guide was received.]',
    'Head of programmes',
    'Leadership training company, Amsterdam',
  ],
  ['[Third client quote. A short one works well here.]', 'Founder', 'Boutique pricing consultancy, Boston'],
];

const faq = [
  [
    'Do we need a sales call?',
    'No. Apply with a source link and your commercial context. We reply by email with the campaign direction, scope, and payment step. If it fits, you approve and start without booking a meeting.',
  ],
  [
    'What counts as a source asset?',
    'A recorded webinar, podcast, workshop, keynote, interview, or presentation with enough original expertise to develop a useful point of view.',
  ],
  [
    'Does AI write everything?',
    'Automation handles transcription, extraction, first drafts, consistency checks, and production. Your editor remains responsible for the narrative, factual flags, and final quality.',
  ],
  [
    'Can you match our brand?',
    'Yes. We build a reusable profile from your website, brand files, approved examples, tone, and the decisions you make during review.',
  ],
  [
    'What if we do not have a webinar every month?',
    'Your source can also be a podcast, workshop, keynote, interview, or existing presentation. The subscription is built around one substantial expert source, not one specific format.',
  ],
];

export default function Home() {
  return (
    <main>
      <SiteNav variant="home" />

      <section className="container hero" id="top">
        <div>
          <p className="spots-line">{spotsLine(siteConfig.spotsLeft, siteConfig.cohortMonth)}</p>
          <h1 className="display-1">
            One expert session.
            <br />
            One month of content.
          </h1>
          <p className="lede hero-lede">
            Send us a webinar, podcast, workshop, or keynote. Two days later your editor sends back a guide, eight
            LinkedIn posts, three emails and landing page copy, written in your voice and ready for one round of review.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/apply">
              Start without a sales call
            </Link>
            <Link className="button button-secondary" href="/sample">
              See a sample month
            </Link>
          </div>
          <p className="hero-note">No sales call, no prompt writing. You review once and publish.</p>
        </div>

        <aside className="delivery-card" aria-label="Your monthly delivery">
          <div className="delivery-head">
            <strong>What comes back</strong>
            <span>Ready in 48h</span>
          </div>
          <div className="source-row">
            <div className="source-tile">60&apos;</div>
            <div>
              <strong>Your recorded session</strong>
              <span>Webinar, podcast, workshop, or keynote · up to 75 min</span>
            </div>
          </div>
          <p className="becomes">
            <span>becomes</span>
          </p>
          <ul className="delivery-list">
            <li>
              <span>
                Premium guide <small>· 8–16 pages</small>
              </span>
              <b>1</b>
            </li>
            <li>
              <span>LinkedIn posts</span>
              <b>8</b>
            </li>
            <li>
              <span>Nurture emails</span>
              <b>3</b>
            </li>
            <li>
              <span>Landing page copy</span>
              <b>1</b>
            </li>
          </ul>
          <div className="delivery-foot">
            <span>One consolidated revision</span>
            <strong>
              $1,500<small>/month</small>
            </strong>
          </div>
        </aside>
      </section>

      <section className="audience-strip">
        <div className="container">
          <span>Built for</span>
          <p>
            Small consultancies, advisory boutiques and training firms that already run webinars, podcasts or workshops,
            and have nobody whose job it is to turn them into content.
          </p>
        </div>
      </section>

      <section className="container section" id="how">
        <div className="split how-split">
          <div className="split-sticky">
            <h2 className="heading">How a recording becomes a month of content</h2>
            <p className="body">
              We listen to the whole recording, pull out the ideas worth publishing, write everything, apply your brand
              and send finished files. Every claim stays tied to the minute it was said.
            </p>
          </div>
          <ol className="steps-list">
            {steps.map(([n, title, text]) => (
              <li key={title}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tinted" id="output">
        <div className="container section">
          <div className="section-head">
            <div>
              <p className="label">What you get each month</p>
              <h2 className="heading">
                Thirteen pieces, all from
                <br />
                the same hour of talking
              </h2>
            </div>
            <p className="body">
              Everything shares one argument, one voice and one call to action, so it reads like a campaign rather than a
              pile of posts.{' '}
              <Link className="inline-link" href="/sample">
                Read a sample month
              </Link>
            </p>
          </div>
          <div className="output-grid">
            {outputs.map(([placeholder, label, title, text]) => (
              <article className="output-card" key={title}>
                <div className="output-thumb">{placeholder}</div>
                <div>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {siteConfig.showEditor && (
        <section className="container section editor-section">
          <div className="editor-photo-wrap">
            <div className="editor-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/editor-portrait.webp" alt="Anders, the editor who signs off every delivery" />
            </div>
            <div className="editor-caption">
              <p>Anders, editor</p>
              <p>The same person every month</p>
            </div>
          </div>
          <div>
            <h2 className="heading">Why not just use ChatGPT?</h2>
            <p className="body">
              You could, and you would get drafts. We use the same tools for transcription, extraction and first passes.
              The difference is that one editor reads all of it, checks every claim against the recording, fixes the
              argument and signs off before you see anything. Your job is to approve, not to manage.
            </p>
            <div className="difference-grid">
              {difference.map(([title, text]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-tinted">
        <div className="container section-sub split founder-split">
          <p className="label">A note from the founder</p>
          <div className="founder-note">
            <p>
              I started Afterword because I kept watching small firms give a genuinely good hour of talk to forty people,
              and then never use it again. The recording sat in a folder. The insight went nowhere.
            </p>
            <p>
              This is a small service on purpose. I take a few clients, I read every word before it goes out, and I
              would rather turn you down than hand you something I wouldn&apos;t publish myself. If the first month
              doesn&apos;t hold up, you don&apos;t pay for it.
            </p>
            <div className="founder-sign">
              <div className="founder-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/founder-avatar.webp" alt="" />
              </div>
              <div>
                <strong>Anders</strong>
                <span>Founder and editor, Afterword</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-forest" id="pricing">
        <div className="container section split pricing-split">
          <div>
            <p className="label label-on-forest">Founding membership</p>
            <h2 className="heading">
              One plan, one price,
              <br />
              no retainer
            </h2>
            <p>
              One recording a month. The scope is fixed, so there are no hours to track and nothing to negotiate.
              Anything outside it is quoted before we start.
            </p>
            <div className="addons">
              {addOns.map(([name, price]) => (
                <div key={name}>
                  <span>{name}</span>
                  <b>{price}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="price-card">
            <div className="price-head">
              <div>
                <p>Afterword Monthly</p>
                <p>Founding member rate</p>
              </div>
              <strong className="price-amount">
                $1,500<span>/ month</span>
              </strong>
            </div>
            <ul className="price-list">
              {priceItems.map((item) => (
                <li key={item}>
                  <Check size={18} strokeWidth={2} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="button button-primary button-block" href="/apply">
              Apply for a founding spot
            </Link>
            <p className="price-note">First delivery within 48 hours after complete intake.</p>
            <div className="guarantee">
              <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>First-month guarantee</strong>
                <p>
                  If you would not publish what we deliver in the first month, tell us and we refund it in full. No
                  review-round conditions, no forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {siteConfig.showTestimonials && (
        <section className="container section">
          <div className="section-head">
            <h2 className="heading">What the first clients said</h2>
            <p className="body-sm">
              Quotes are shared with permission. Firms are described rather than named, because most of them would
              rather not advertise how their content gets made.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([quote, role, firm]) => (
              <figure className="testimonial testimonial-placeholder" key={firm}>
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <p>{role}</p>
                  <p>{firm}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section-ruled">
        <div className="container section split faq-split">
          <div>
            <p className="label">Before you apply</p>
            <h2 className="heading">Questions we get asked</h2>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tinted">
        <div className="cta-panel">
          <h2>
            Send us a recording and we&apos;ll
            <br />
            tell you what we&apos;d make of it
          </h2>
          <p>
            A public link and your website is enough. Within a day you get an email with the guide we would build from
            it, and a straight answer on whether we think it is a fit.
          </p>
          <Link className="button button-primary button-wide" href="/apply">
            Start without a sales call
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
