import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav, Wordmark } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Delivery kit — Afterword (internal)',
  description: 'The production standard for every Afterword month.',
  robots: { index: false, follow: false },
};

const contents = [
  ['1', 'Guide', '#guide'],
  ['2', 'LinkedIn posts', '#linkedin'],
  ['3', 'Emails', '#emails'],
  ['4–5', 'Landing page & package', '#landing'],
];

const guidePages = [
  ['1', 'Cover', 'Client color block. Title, audience line, page count and reading time, source date.'],
  [
    '2',
    'Contents + origin',
    'Where the guide comes from: speakers, date, audience. The sample disclaimer lives here on samples.',
  ],
  [
    '3',
    'Introduction',
    'The problem in three paragraphs and one pull quote with a timestamp. No history of the firm.',
  ],
  ['4', 'Chapter 1', 'The core idea, named. Ends with a short list of what it looks like in practice.'],
  ['5', 'Numbers page', 'Client color block. Four figures maximum, each with one sentence. Source line at the bottom.'],
  ['6', 'Decision / step 1', 'What to do, why, and the test for whether it worked. Points to the template page.'],
  [
    '7',
    'Template page',
    'Something the reader can copy tomorrow: a script, a checklist, an agenda. Fill-in brackets allowed.',
  ],
  ['8', 'Decision / step 2', 'Same structure as page 6. One pull quote from the second speaker if there is one.'],
  ['9', 'Decision / step 3', 'Same structure. Ends with "if it did not work" guidance.'],
  ['10', 'Checklist', 'Six items, tick boxes, printable. Last line tells the reader what to do with the page.'],
  ['11', 'About + offer', "The client's call to action in plain terms. Speaker bios, two lines each. No logos wall."],
  ['12', 'Back cover', 'Sources by timestamp. Copyright line. "Produced with Afterword" in small type.'],
];

const postMix = [
  ['2', 'Hooks', 'A number or a contradiction from the recording, then the turn. Sent first and fifth.'],
  ['2', 'Arguments', 'One decision from the guide, made in full. The post is complete without the link.'],
  ['2', 'Stories', 'A moment the speaker described. Present tense, named role, no client names.'],
  ['1', 'Checklist', "The guide's checklist as a list post. The most saved post of the month, usually."],
  ['1', 'Guide announcement', 'Last. What is in it, who it is for, where to get it. Under 80 words.'],
];

const emailSeq = [
  ['1.', 'The guide', 'day 1', 'Why it exists, who it is for, the link. Under 100 words.'],
  ['2.', 'The idea', 'day 4', 'The sharpest point in the guide, developed. Points to one page.'],
  ['3.', 'The ask', 'day 9', 'Where the idea meets the offer. The PS carries the commercial question.'],
];

const lpBlocks = [
  ['Headline', 'A claim the reader would argue with. Under 14 words.'],
  ['Subhead', 'What the guide is, for whom, how long. One sentence.'],
  ['Proof', 'The numbers page in one paragraph. Where the figures come from.'],
  ['Form', 'Fields and the one qualifying question. Never more than three fields.'],
  ['CTA', 'Two or three words. Names the object, not the action ("Get the guide", not "Submit").'],
];

const tree = `northstar_2026-10/
├── 00_read-me-first.txt         what changed after review
├── 01_guide/
│   ├── northstar_guide-01_web.pdf
│   ├── northstar_guide-01_print.pdf
│   └── northstar_guide-01_source.docx
├── 02_linkedin/
│   ├── posts_01-08.docx
│   └── posts_01-08.txt             one post per block, send-days marked
├── 03_emails/
│   └── emails_01-03.txt            subject, preview, send-day, body
├── 04_landing-page/
│   └── landing-page-copy.docx      five labeled blocks
└── 05_sources/
    └── claims-and-timestamps.csv   every claim, its piece, its minute`;

export default function KitPage() {
  return (
    <main>
      <SiteNav variant="internal" />

      <section className="container kit-hero">
        <div>
          <p className="label">Delivery kit</p>
          <h1 className="display-2">What a month looks like when it leaves us</h1>
        </div>
        <p className="body">
          The format for every piece, so each month reads like the last and the client never has to learn a new layout.
          Client brand goes on top; the structure underneath stays the same.
        </p>
      </section>

      <section className="kit-contents">
        <div className="container">
          {contents.map(([n, label, href]) => (
            <a key={href} href={href}>
              <span>{n}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="container section-sub split kit-split" id="guide">
        <div className="split-sticky">
          <p className="label">1. The guide</p>
          <h2 className="heading-sub mb-24">Twelve pages, always in the same order</h2>
          <p className="body-sm mb-24">
            US Letter portrait, or A4 for clients outside the US, in the client&apos;s typeface and color. One idea, three to five sections, one template
            page the reader can use tomorrow. Timestamps in the margin on every claim.
          </p>
        </div>
        <ol className="kit-pages">
          {guidePages.map(([n, name, rule]) => (
            <li key={n}>
              <span>{n}</span>
              <span>{name}</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-tinted" id="linkedin">
        <div className="container section-sub">
          <div className="section-head">
            <div>
              <p className="label">2. LinkedIn posts</p>
              <h2 className="heading-sub">Eight posts, five kinds, two weeks</h2>
            </div>
            <p className="body-sm">
              Written in the speaker&apos;s first person. No hashtags, no emoji, no &quot;I&apos;m thrilled&quot;. Every
              post can be read without the guide, and every post makes the guide worth opening.
            </p>
          </div>
          <div className="kit-mix">
            <div className="kit-mix-list">
              {postMix.map(([count, kind, text]) => (
                <div key={kind}>
                  <span>{count}</span>
                  <div>
                    <h3>{kind}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
              <div className="kit-mix-notes">
                <p>
                  <b>Rhythm.</b> Tue, Thu, Tue, Thu across two weeks. Hook first, announcement last.
                </p>
                <p>
                  <b>Length.</b> 60 to 180 words. Under 210 characters before the fold, so the hook is never cut.
                </p>
              </div>
            </div>
            <div>
              <p className="caption caption-top">Anatomy of a post</p>
              <article className="anatomy">
                <div className="anatomy-head">
                  <div className="avatar-stub lg" aria-hidden="true" />
                  <div>
                    <p>Maya Chen</p>
                    <p>Managing Partner, Northstar Advisory</p>
                  </div>
                </div>
                <div className="anatomy-rows">
                  <div>
                    <p>We reviewed 40 pricing changes at services firms last year.</p>
                    <span className="anatomy-note">
                      Hook. One line, a number or a contradiction. Fits before &quot;see more&quot;.
                    </span>
                  </div>
                  <div>
                    <p>
                      31 were approved unanimously by the partners.
                      <br />
                      <br />
                      19 of those 31 had quietly reverted within 90 days.
                    </p>
                    <span className="anatomy-note">
                      Argument. Short paragraphs, one thought each, blank line between.
                    </span>
                  </div>
                  <div>
                    <p>The model was never the problem. The handover was.</p>
                    <span className="anatomy-note">Turn. The sentence the reader repeats to someone else.</span>
                  </div>
                  <div>
                    <p className="dim">Guide in the comments. Page 7 has the template we use.</p>
                    <span className="anatomy-note">Close. Link goes in the first comment, never in the post.</span>
                  </div>
                </div>
                <p className="anatomy-source">source 18:40 – 21:15 · delivered as .docx and .txt</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-sub split kit-split-wide" id="emails">
        <div className="split-sticky">
          <p className="label">3. Nurture emails</p>
          <h2 className="heading-sub mb-24">Three plain-text emails, one idea each</h2>
          <p className="body-sm mb-32">
            Delivered as text with a subject line and a send-day, ready to paste into any tool. No HTML template, no
            header image. They should look like the speaker typed them.
          </p>
          <ol className="kit-seq">
            {emailSeq.map(([n, name, day, text]) => (
              <li key={n}>
                <span>{n}</span>
                <div>
                  <strong>
                    {name} <span>· {day}</span>
                  </strong>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="caption caption-top">Anatomy of an email</p>
          <article className="anatomy anatomy-email">
            <div className="anatomy-email-head">
              <div>
                <span>
                  <b>Subject</b> &nbsp;The handover nobody owns
                </span>
                <span>
                  <b>Preview</b> &nbsp;Most of the failures we&apos;ve seen were approved unanimously.
                </span>
              </div>
              <span className="anatomy-note">
                Subject under 45 characters. Lower case after the first word. No punctuation at the end.
              </span>
            </div>
            <div className="anatomy-rows">
              <div>
                <p>Most pricing changes we&apos;ve watched fail were approved unanimously.</p>
                <span className="anatomy-note">
                  First line does the work. No &quot;Hi {'{name}'}, hope you&apos;re well&quot;.
                </span>
              </div>
              <div>
                <p>
                  The partners agreed. The model worked. Then, somewhere between the partner meeting and the first
                  renewal conversation, the new price quietly became a &quot;target&quot;.
                  <br />
                  <br />
                  Nobody decided that. It happened because the account team was handed a number, not a reason.
                </p>
                <span className="anatomy-note">
                  Body: 120 to 180 words. Two to four paragraphs. One idea from the guide, developed, not summarized.
                </span>
              </div>
              <div>
                <p>
                  Page 7 has the template we use.
                  <br />
                  <br />
                  Maya
                </p>
                <span className="anatomy-note">
                  One link, in a sentence, pointing to a specific page. Sign-off is the first name only.
                </span>
              </div>
              <div>
                <p className="dim">
                  PS. If you&apos;re raising rates in Q1 and want a second pair of eyes on the announcement, reply to
                  this and I&apos;ll read it.
                </p>
                <span className="anatomy-note">
                  PS carries the commercial ask. Only in email three, or when the client asks for it earlier.
                </span>
              </div>
            </div>
            <p className="anatomy-source">source 31:02 – 34:48 · 41:10 · delivered as .txt with subject + send-day</p>
          </article>
        </div>
      </section>

      <section className="section-tinted" id="landing">
        <div className="container section-sub kit-package">
          <div>
            <p className="label">4. Landing page copy</p>
            <h2 className="heading-sub mb-24">Five labeled blocks</h2>
            <p className="body-sm mb-32">
              Delivered as a document, one block per heading, so whoever runs the client&apos;s website can place it
              without a briefing. We do not design the page; we write it.
            </p>
            <ol className="kit-lp">
              {lpBlocks.map(([label, rule]) => (
                <li key={label}>
                  <span>{label}</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="label">5. The package</p>
            <h2 className="heading-sub mb-24">One folder, named the same way every month</h2>
            <p className="body-sm mb-32">
              Sent as a link with the final files, plus a two-line note on what changed after review.
            </p>
            <pre className="file-tree">{tree}</pre>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <Wordmark />
          <p>Internal production standard · v1 · examples are from the fictional Northstar sample</p>
          <Link href="/sample">See the sample month</Link>
        </div>
      </footer>
    </main>
  );
}
