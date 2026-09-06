import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SubpageNav } from '../site-chrome';

export const metadata: Metadata = {
  title: 'A sample month — Afterword',
  description: 'See how one fictional 62-minute webinar becomes a complete B2B content campaign.',
};

const toc = [
  ['1.', 'Why the spreadsheet is never the problem', '04:12'],
  ['2.', 'The handover gap', '18:40'],
  ['3.', 'Decision one: who says the new price out loud', '27:05'],
  ['4.', 'Decision two: what the first “no” may change', '38:51'],
  ['5.', 'Decision three: the 90-day review nobody schedules', '52:30'],
];

const posts = [
  { kind: 'Hook', ts: '18:40–21:15', body: 'We reviewed 40 pricing changes at services firms last year.\n\n31 were approved unanimously by the partners.\n\n19 of those 31 had quietly reverted within 90 days.\n\nThe model was never the problem. The handover was.' },
  { kind: 'Argument', ts: '27:05–30:40', body: 'A pricing change is not a number. It is a sentence somebody has to say to a client who liked the old number.\n\nIf the partner who argued for the change has not written that sentence, the account team will improvise one. And improvised sentences discount.\n\nBefore you announce a new rate internally, write the two paragraphs your account leads will actually say.' },
];

export default function SamplePage() {
  return <main>
    <SubpageNav />
    <section className="subpage-hero container"><div><p className="section-label">A sample month</p><h1>What one 62-minute webinar turned into</h1><p className="lede">A worked example for a fictional pricing consultancy. Every claim carries the timestamp it came from, the same way your review link would.</p></div><div className="source-summary"><p>The source</p><div className="source-summary-main"><b>62&apos;</b><div><strong>“Why pricing changes stall in the first 90 days”</strong><span>Northstar Advisory · client webinar · 2 speakers</span></div></div><div className="timeline"><span><b>Fri</b> intake</span><span><b>Sun</b> review link</span><span><b>Tue</b> final files</span></div></div></section>

    <section className="paper-two"><div className="container sample-section sample-split"><div className="guide-cover"><div><span>Northstar Advisory</span><span>Guide 01</span></div><div><h2>The 90-day pricing stall, and the three decisions that end it.</h2><p>A field guide for managing partners · 12 pages</p></div></div><div className="sample-copy"><p className="section-label">The guide</p><h2>Built around the one idea the speakers kept coming back to</h2><p>The speakers spent 62 minutes circling one insight: pricing changes fail in the handover from partners to account teams, not in the spreadsheet. The guide is built on that, with the webinar&apos;s own examples as evidence.</p><ol className="toc">{toc.map(([n, title, time]) => <li key={n}><span>{n}</span><span>{title}</span><time>{time}</time></li>)}</ol></div></div></section>

    <section className="container sample-section"><div className="sample-heading"><div><p className="section-label">The LinkedIn posts</p><h2>Two of the eight posts</h2></div><p>Written in Maya&apos;s first person and cadence. Each one works on its own and points back to the guide.</p></div><div className="post-grid">{posts.map(post => <article className="post-card" key={post.kind}><div className="post-author"><i className="avatar-pattern" /><div><strong>Maya Chen</strong><small>Managing Partner, Northstar Advisory</small></div><span>{post.kind}</span></div><p className="post-body">{post.body}</p><p className="timestamp">source {post.ts}</p></article>)}</div><p className="plus-note">+ six more: two stories, two contrarian takes, one checklist, and one guide announcement.</p></section>

    <section className="paper-two"><div className="container sample-section sample-split"><div className="sample-copy"><p className="section-label">The emails</p><h2>Three short emails, one idea each</h2><p>Email one delivers the guide. Email two develops the sharpest idea. Email three opens the commercial conversation. This is email two.</p></div><article className="email-card"><div className="email-meta"><span><b>From</b> &nbsp;Maya Chen, Northstar Advisory</span><span><b>Subject</b> &nbsp;The handover nobody owns</span></div><div className="email-body"><p>Most pricing changes we have watched fail were approved unanimously.</p><p>The partners agreed. The model worked. The deck was clear. Then, somewhere between the partner meeting and the first renewal conversation, the new price quietly became a “target” and the old price became the “floor”.</p><p>Nobody decided that. It happened because the account team was handed a number, not a reason. When the first client pushed back, the reason was not in the room.</p><p>In the guide we call this the handover gap. Page 7 has the template we use.</p><p>Maya</p><Link className="button button-primary" href="#">Open the guide</Link></div><p className="timestamp">source 31:02–34:48 · 41:10</p></article></div></section>

    <section className="container sample-section sample-split"><div className="sample-copy"><p className="section-label">The landing-page copy</p><h2>Labelled blocks, ready to place</h2><p>Headline, intro, proof, form copy and button text. Delivered as a document with each block labelled, so whoever runs your website can place it without a briefing.</p></div><div className="landing-blocks"><div><span>Headline</span><p className="landing-headline">Your pricing change was approved. Here is why it will stall by day 90.</p></div><div><span>Subhead</span><p>A 12-page field guide for managing partners on the three decisions that keep a new price from quietly reverting.</p></div><div><span>Proof</span><p>Built from 40 pricing changes reviewed across professional-services firms.</p></div><div><span>Form</span><p>Work email · Firm size · Are you planning a rate change in the next six months?</p></div><div><span>CTA</span><p>Get the guide</p></div></div></section>

    <section className="pricing final-cta"><h2>Want to see this for your own recording?</h2><p>Send a link and we reply within a day with the guide we would build from it.</p><Link className="button button-inverse" href="/apply">Start without a sales call</Link></section>
    <SiteFooter note="Illustrative sample. Client, speakers, and figures are fictional." />
  </main>;
}
