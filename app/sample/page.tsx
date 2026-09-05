import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteNav } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'A sample month — Afterword',
  description:
    'A worked example: what one 62-minute webinar turned into. Guide, LinkedIn posts, emails and landing page copy, every claim carrying its timestamp.',
};

const toc = [
  ['1.', 'Why the spreadsheet is never the problem', '04:12'],
  ['2.', 'The handover gap', '18:40'],
  ['3.', 'Decision one: who says the new price out loud', '27:05'],
  ['4.', 'Decision two: what the first “no” is allowed to change', '38:51'],
  ['5.', 'Decision three: the 90-day review nobody schedules', '52:30'],
];

const posts = [
  {
    kind: 'Hook',
    ts: '18:40 – 21:15',
    body: 'We reviewed 40 pricing changes at services firms last year.\n\n31 were approved unanimously by the partners.\n\n19 of those 31 had quietly reverted within 90 days.\n\nThe model was never the problem. The handover was.',
  },
  {
    kind: 'Argument',
    ts: '27:05 – 30:40',
    body: 'A pricing change is not a number. It is a sentence somebody has to say to a client who liked the old number.\n\nIf the partner who argued for the change hasn’t written that sentence, the account team will improvise one. And improvised sentences discount.\n\nBefore you announce a new rate internally, write the two paragraphs your account leads will actually say. That is the whole change.',
  },
];

const emailSequence = [
  ['1', 'Your guide: the 90-day pricing stall'],
  ['2', 'The handover nobody owns'],
  ['3', 'If you’re raising rates in Q1'],
];

const landingBlocks: [string, string, string][] = [
  ['Headline', 'Your pricing change was approved. Here is why it will stall by day 90.', 'serif'],
  [
    'Subhead',
    'A 12-page field guide for managing partners on the three decisions that keep a new price from quietly reverting.',
    'lead',
  ],
  [
    'Proof',
    'Built from 40 pricing changes reviewed across professional-services firms, and the handover pattern that separated the 21 that held from the 19 that did not.',
    '',
  ],
  [
    'Form',
    'Work email · Firm size (5–30 / 30–100 / 100+) · “Are you planning a rate change in the next six months?”',
    '',
  ],
  ['CTA', 'Get the guide', ''],
];

export default function SamplePage() {
  return (
    <main>
      <SiteNav variant="sub" />

      <section className="container sample-hero">
        <div>
          <p className="label">A sample month</p>
          <h1 className="display-2">What one 62-minute webinar turned into</h1>
          <p className="body">
            A worked example for a fictional pricing consultancy. Every claim carries the timestamp it came from, the
            same way your review link would.
          </p>
        </div>
        <div className="source-card">
          <p>The source</p>
          <div className="source-row">
            <div className="source-tile">62&apos;</div>
            <div>
              <strong>“Why pricing changes stall in the first 90 days”</strong>
              <span>Northstar Advisory · client webinar · 2 speakers</span>
            </div>
          </div>
          <div className="source-timeline">
            <span>
              <b>Fri</b> intake complete
            </span>
            <span>
              <b>Sun</b> review link sent
            </span>
            <span>
              <b>Tue</b> final files
            </span>
          </div>
        </div>
      </section>

      <section className="section-tinted">
        <div className="container section-sample split guide-split">
          <div className="guide-cover">
            <div className="guide-cover-top">
              <span>Northstar Advisory</span>
              <span>Guide 01</span>
            </div>
            <div>
              <h3>The 90-day pricing stall, and the three decisions that end it.</h3>
              <p>A field guide for managing partners · 12 pages</p>
            </div>
          </div>
          <div>
            <p className="label">The guide</p>
            <h2 className="heading-sub mb-24">
              Built around the one idea the speakers kept coming back to
            </h2>
            <p className="body-sm mb-32">
              The speakers spent 62 minutes circling one insight: pricing changes fail in the handover from partners to
              account teams, not in the spreadsheet. The guide is built on that, with the webinar&apos;s own examples as
              evidence.
            </p>
            <ol className="toc">
              {toc.map(([n, title, ts]) => (
                <li key={ts}>
                  <span>{n}</span>
                  <span>{title}</span>
                  <span className="timestamp">{ts}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container section-sample">
        <div className="section-head mb-48">
          <div>
            <p className="label">The LinkedIn posts</p>
            <h2 className="heading-sub">Two of the eight posts</h2>
          </div>
          <p className="body-sm">
            Written in Maya&apos;s first person and her cadence. Each one works on its own and points back to the guide.
            Spread over two weeks.
          </p>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.kind}>
              <div className="post-head">
                <div className="avatar-stub" aria-hidden="true" />
                <div>
                  <p>Maya Chen</p>
                  <p>Managing Partner, Northstar Advisory</p>
                </div>
                <span className="post-kind">{post.kind}</span>
              </div>
              <p className="post-body">{post.body}</p>
              <p className="post-source">source {post.ts}</p>
            </article>
          ))}
        </div>
        <p className="post-more">
          + six more: two stories, two contrarian takes, one checklist, one guide announcement.
        </p>
      </section>

      <section className="section-tinted">
        <div className="container section-sample split guide-split">
          <div>
            <p className="label">The emails</p>
            <h2 className="heading-sub mb-24">
              Three short emails, one idea each
            </h2>
            <p className="body-sm">
              Email one delivers the guide. Email two develops the sharpest idea. Email three opens the commercial
              conversation. Below is email two.
            </p>
            <ul className="email-seq">
              {emailSequence.map(([n, subject]) => (
                <li key={n} className={n === '2' ? 'current' : undefined}>
                  <span>{n}</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
          <article className="email-card">
            <div className="email-card-head">
              <span>
                <b>From</b> &nbsp;Maya Chen, Northstar Advisory
              </span>
              <span>
                <b>Subject</b> &nbsp;The handover nobody owns
              </span>
            </div>
            <div className="email-card-body">
              <p>Most pricing changes we&apos;ve watched fail were approved unanimously.</p>
              <p>
                The partners agreed. The model worked. The deck was clear. Then, somewhere between the partner meeting
                and the first renewal conversation, the new price quietly became a “target” and the old price became the
                “floor”.
              </p>
              <p>
                Nobody decided that. It happened because the account team was handed a number, not a reason. When the
                first client pushed back, the reason wasn&apos;t in the room.
              </p>
              <p>
                In the guide we call this the handover gap, and the fix is smaller than most firms expect: the partner
                who argued for the change writes the two paragraphs the account team will say out loud. Not the slides.
                The sentences.
              </p>
              <p>Page 7 has the template we use.</p>
              <p>Maya</p>
              <span className="button button-primary">Open the guide</span>
            </div>
            <p className="email-card-source">source 31:02 – 34:48 · 41:10</p>
          </article>
        </div>
      </section>

      <section className="container section-sample split guide-split">
        <div>
          <p className="label">The landing page copy</p>
          <h2 className="heading-sub mb-24">
            Labelled blocks, ready to place
          </h2>
          <p className="body-sm">
            Headline, intro, proof, form copy and button text. Delivered as a document with each block labelled, so
            whoever runs your website can place it without a briefing.
          </p>
        </div>
        <div className="lp-blocks">
          {landingBlocks.map(([label, text, variant]) => (
            <div key={label}>
              <span>{label}</span>
              <p className={variant || undefined}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-forest">
        <div className="cta-panel compact">
          <h2>Want to see this for your own recording?</h2>
          <p>Send a link and we reply within a day with the guide we would build from it.</p>
          <Link className="button button-inverse button-wide" href="/apply">
            Start without a sales call
          </Link>
        </div>
      </section>

      <SiteFooter note="Illustrative sample. Client, speakers, and figures are fictional." />
    </main>
  );
}
