import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteNav } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'How review works — Afterword',
  description:
    'One review link. Every claim points back to the minute it was said, so you check the argument instead of hunting for the source.',
};

const status: [string, string][] = [
  ['Intake complete · Fri', ''],
  ['Review link sent · Sun', ''],
  ['Your comments · now', 'current'],
  ['Final files', 'pending'],
];

const pieces: [string, string, boolean][] = [
  ['Premium guide', '12 pp', true],
  ['LinkedIn posts', '8', false],
  ['Emails', '3', false],
  ['Landing page', '1', false],
];

const steps = [
  [
    'Day 0',
    'Intake complete',
    'We have the recording, your website, and your answers from the application. Nothing else is needed from you.',
  ],
  [
    'Day 1',
    'The argument is chosen',
    'Your editor listens through and picks the one idea worth a guide. You get a two-line note saying what it is. If you disagree, say so now.',
  ],
  [
    'Day 2',
    'Review link sent',
    'All thirteen pieces, laid out in your brand, with every claim linked to its timestamp. Comment on anything, in one round.',
  ],
  [
    'Day 3–4',
    'Final files',
    'Revisions made, PDFs and copy documents delivered. Your review decisions are saved to your brand profile for next month.',
  ],
];

const rules = [
  [
    '1.',
    'Nothing the speaker did not say',
    'We sharpen, structure and cut. We do not add claims, statistics or opinions that are not in the recording. If the argument needs a fact the speaker did not give, we ask you for it.',
  ],
  [
    '2.',
    'One round, taken seriously',
    'A single consolidated round keeps the price fixed and forces both sides to read carefully. Comments that change a term or a fact are applied across every piece, not just the one you commented on.',
  ],
  [
    '3.',
    'Your decisions are remembered',
    'Every correction becomes part of your brand profile. By the third month you should be approving with almost no comments, because we already know how you say things.',
  ],
];

export default function ReviewPage() {
  return (
    <main>
      <SiteNav variant="sub" />

      <section className="container review-hero">
        <div>
          <p className="label">How review works</p>
          <h1 className="display-2">One link. Every claim points back to the minute it was said.</h1>
        </div>
        <p className="body">
          Two days after intake you get a review link. It shows the finished pieces next to the parts of the recording
          they came from, so you check the argument instead of hunting for the source. Comment once, approve, done.
        </p>
      </section>

      <section className="container review-mock-wrap">
        <figure className="review-mock">
          <figcaption className="visually-hidden">
            A mock-up of the Afterword review link: a guide page beside the part of the recording it came from.
          </figcaption>
          <div className="review-chrome">
            <div className="review-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="review-url">review.afterword.co/northstar/october</div>
          </div>

          <div className="review-body">
            <aside className="review-side">
              <div>
                <p>Northstar Advisory</p>
                <h3>October campaign</h3>
              </div>
              <div>
                <p>Status</p>
                <ol className="review-status">
                  {status.map(([label, modifier]) => (
                    <li key={label} className={modifier || undefined}>
                      <i aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p>Pieces</p>
                <ul className="review-pieces">
                  {pieces.map(([name, count, active]) => (
                    <li key={name} className={active ? 'active' : undefined}>
                      <span>{name}</span>
                      <span>{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="review-approve">
                <span className="button button-primary">Approve all pieces</span>
                <p>Or leave comments and we revise once.</p>
              </div>
            </aside>

            <article className="review-article">
              <p>Premium guide · page 4 of 12</p>
              <h2>The handover gap</h2>
              <p>
                A rate change passes through three groups of people: the partners who decide it, the account leads who
                have to say it, and the clients who hear it. Most firms design the first step carefully and the third
                step nervously. Almost nobody designs the second.
              </p>
              <p>
                The account lead is handed a number, a date, and sometimes a slide.{' '}
                <mark>
                  What they are not handed is the reason, in words they can say out loud without sounding like they are
                  reading from a memo.
                </mark>{' '}
                So when the first client pushes back, the lead improvises. And improvised sentences discount.
              </p>
              <p>
                This is the handover gap. It is not a courage problem or a training problem.{' '}
                <span className="dotted">
                  It is a writing problem, and it belongs to the partner who argued for the change.
                </span>
                <sup>19:32</sup>
              </p>
              <div className="review-comment">
                <div className="avatar-stub" aria-hidden="true" />
                <div>
                  <p>
                    <b>Maya Chen</b> <span className="caption">· 2 hours ago</span>
                  </p>
                  <p className="comment-body">
                    Can we say &quot;account partner&quot; rather than &quot;account lead&quot; throughout? That&apos;s
                    our term.
                  </p>
                  <p className="comment-reply">Anders: Yes, changing in all 13 pieces. Added to your brand profile.</p>
                </div>
              </div>
            </article>

            <aside className="review-source">
              <div>
                <p>Source for the highlighted claim</p>
                <p>Webinar · 18:40 – 19:55</p>
              </div>
              <div className="video-stub">
                <div className="video-play" aria-hidden="true">
                  <i />
                </div>
                <div className="video-scrub" aria-hidden="true">
                  <i />
                </div>
              </div>
              <div className="transcript">
                <p>
                  <span className="ts">18:40</span>…so the partner meeting ends, everyone&apos;s agreed, and what does
                  the account team actually get? They get a number and a date. Sometimes a slide.
                </p>
                <p className="active">
                  <span className="ts">19:12</span>What they don&apos;t get is the <em>why</em>, in words they could say
                  to a client without sounding like they&apos;re reading a memo. That&apos;s the bit nobody writes.
                </p>
                <p>
                  <span className="ts">19:32</span>And I&apos;d argue that&apos;s not a training problem. It&apos;s a
                  writing problem, and it belongs to whoever argued for the change.
                </p>
              </div>
              <p className="review-hint">Click any highlighted sentence in the piece to jump to its source.</p>
            </aside>
          </div>
        </figure>
      </section>

      <section className="section-tinted">
        <div className="container section-sub">
          <h2 className="section-heading-wide">
            What happens between the recording and the finished files
          </h2>
          <div className="review-steps">
            {steps.map(([when, title, text]) => (
              <div key={title}>
                <p>{when}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-sub split rules-split">
        <h2>Three rules we hold ourselves to</h2>
        <div className="rules-list">
          {rules.map(([n, title, text]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-forest">
        <div className="cta-panel compact">
          <h2>Want to see your own recording in this view?</h2>
          <p>
            Apply with a link. Within a day we reply with the angle we would take and whether we think it is a fit.
          </p>
          <Link className="button button-inverse button-wide" href="/apply">
            Start without a sales call
          </Link>
        </div>
      </section>

      <SiteFooter note="The review link shown is a mock-up with fictional content." />
    </main>
  );
}
