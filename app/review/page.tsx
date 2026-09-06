import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SubpageNav } from '../site-chrome';

export const metadata: Metadata = { title: 'How review works — Afterword', description: 'See the single-link, source-backed Afterword review workflow.' };

const steps = [
  ['Day 0', 'Intake complete', 'We have the recording, your website, and your application answers. Nothing else is needed from you.'],
  ['Day 1', 'The argument is chosen', 'Your editor picks the one idea worth a guide and sends a two-line direction note.'],
  ['Day 2', 'Review link sent', 'All thirteen pieces, laid out in your brand, with claims linked to timestamps.'],
  ['Day 3–4', 'Final files', 'Revisions made, finished files delivered, and your decisions saved for next month.'],
];

export default function ReviewPage() {
  return <main>
    <SubpageNav />
    <section className="subpage-hero container"><div><p className="section-label">How review works</p><h1>One link. Every claim points back to the minute it was said.</h1></div><p>Two days after intake you get a review link. It shows finished pieces beside the source passages they came from. Comment once, approve, done.</p></section>
    <section className="container review-wrap"><div className="review-browser"><div className="browser-bar"><div className="browser-dots"><i /><i /><i /></div><div className="browser-address">review.afterwordmonthly.com/northstar/campaign</div></div><div className="review-grid">
      <aside className="review-sidebar"><div><small>Northstar Advisory</small><h3>October campaign</h3></div><div><h4>Status</h4><ol className="status-list"><li><i />Intake complete · Fri</li><li><i />Review link sent · Sun</li><li className="active"><i />Your comments · now</li><li><i />Final files</li></ol></div><div><h4>Pieces</h4><ul className="piece-list"><li><span>Premium guide</span><span>12 pp</span></li><li><span>LinkedIn posts</span><span>8</span></li><li><span>Emails</span><span>3</span></li><li><span>Landing page</span><span>1</span></li></ul></div><button className="button button-primary">Approve all pieces</button><p>Or leave comments and we revise once.</p></aside>
      <article className="review-document"><small>Premium guide · page 4 of 12</small><h2>The handover gap</h2><p>A rate change passes through three groups: the partners who decide it, the account leads who have to say it, and the clients who hear it. Most firms design the first step carefully and the third step nervously. Almost nobody designs the second.</p><p>The account lead is handed a number, a date, and sometimes a slide. <mark>What they are not handed is the reason, in words they can say out loud without sounding like a memo.</mark> So when the first client pushes back, the lead improvises. And improvised sentences discount.</p><p>This is the handover gap. It is not a courage problem or a training problem. It is a writing problem, and it belongs to the partner who argued for the change.<sup>19:32</sup></p><div className="comment-card"><i className="avatar-pattern" /><div><p><strong>Maya Chen</strong> · Can we say “account partner” rather than “account lead” throughout? That is our term.</p><p>Andreas: Yes. Changing it in all 13 pieces and adding it to your profile.</p></div></div></article>
      <aside className="source-panel"><div><small>Source for the highlighted claim</small><h3>Webinar · 18:40–19:55</h3></div><div className="video-placeholder"><i className="play" /></div><div className="transcript"><p><span>18:40</span>So the partner meeting ends, everyone agrees, and what does the account team get? A number and a date.</p><p className="highlight"><span>19:12</span>What they do not get is the why, in words they could say to a client without sounding like a memo.</p><p><span>19:32</span>That is not a training problem. It is a writing problem.</p></div><small>Click any highlighted sentence to jump to its source.</small></aside>
    </div></div></section>
    <section className="paper-two"><div className="container review-steps"><h2>What happens between the recording and the finished files</h2><div className="review-step-grid">{steps.map(([when,title,text]) => <article key={when}><small>{when}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="pricing final-cta"><h2>Want to see your own recording in this view?</h2><p>Apply with a link. Within a day we reply with the angle we would take and whether it is a fit.</p><Link className="button button-inverse" href="/apply">Start without a sales call</Link></section>
    <SiteFooter note="The review interface shown uses fictional content." />
  </main>;
}
