import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SubpageNav } from '../site-chrome';

export const metadata: Metadata = {
  title: 'A sample month — Afterword',
  description: 'The real files Afterword produced from one webinar: a designed field guide, a LinkedIn carousel, eight post visuals and two motion clips.',
};

const A = '/sample/northstar';
const two = (n: number) => String(n).padStart(2, '0');

const toc = [
  ['01', 'Approval does not mean the new rate held', 'Evidence'],
  ['02', 'A number and a date are not enough', 'Argument'],
  ['03', 'Write the client sentence', 'Method'],
  ['04', 'Hear what the old-rate question is testing', 'Argument'],
  ['05', 'Decide what the first no may change', 'Comparison'],
  ['06', 'Put the invoice review in the calendar now', 'Evidence'],
];

const spreads = [
  { page: 3, caption: 'A figure page. The number is shown exactly as it was said, with the moment it was said.' },
  { page: 5, caption: 'A method page. The steps the speaker described, laid out so a team can follow them.' },
  { page: 7, caption: 'A comparison page. Two ways to handle the first refusal, side by side.' },
];

const posts = [
  { n: 1, body: 'Last year, we reviewed 40 pricing changes at services firms.\n\nPartners unanimously approved 31 of them. Yet 19 of those 31 had quietly reverted within 90 days.\n\nA partner vote settles an internal decision. It does not tell me what an account lead will say when a client asks for the old rate, or what that client will be invoiced.\n\nI would make the handover part of the rate decision: prepare the explanation, set the boundary for the first refusal and assign an owner to check the invoices.' },
  { n: 6, body: 'I decide what a first no may change before a client says it.\n\nAn account lead should not have to settle the firm’s position during a difficult call.\n\nBefore announcing a rate change, I would agree the boundary with everyone who will speak to clients. Scope or payment terms may flex. The rate does not move in the first conversation.' },
];

export default function SamplePage() {
  return <main>
    <SubpageNav />
    <section className="subpage-hero container"><div><p className="section-label">A sample month</p><h1>What one webinar turned into</h1><p className="lede">We never publish client work: every campaign stays confidential. So this sample is built from a fictional firm and speaker. The files are exactly what our production system made from the recording, with the same format, design and checks a client receives.</p></div><div className="source-summary"><p>The source</p><div className="source-summary-main"><b aria-hidden="true">▶</b><div><strong>“Why approved rate changes quietly revert”</strong><span>Northstar Advisory · client webinar · Maya Chen, Managing Partner</span></div></div><div className="timeline"><span><b>Day 1</b> recording in</span><span><b>Day 2</b> review link</span><span><b>Day 3</b> final files</span></div></div></section>

    <section className="paper-two"><div className="container sample-section">
      <div className="sample-heading"><div><p className="section-label">The guide</p><h2>A 10-page field guide in the client’s own brand</h2></div><p>Typography and colour are taken from the client’s website. Every quote and figure is checked against the recording and marked with the time it was said. <a className="text-link" href={`${A}/northstar-field-guide.pdf`} target="_blank" rel="noreferrer">Open the full PDF →</a></p></div>
      <div className="guide-showcase">
        <a className="guide-cover-shot" href={`${A}/northstar-field-guide.pdf`} target="_blank" rel="noreferrer"><img src={`${A}/guide-01.webp`} alt="Cover of the Northstar Advisory field guide: The rate the partners approved is not necessarily the rate clients pay" width={636} height={900} /></a>
        <div className="sample-copy"><p className="section-label">Built around one argument</p><h2>The rate the partners approved is not necessarily the rate clients pay</h2><p>The webinar kept returning to one idea: rate changes fail in the handover from partners to account teams, not in the spreadsheet. The guide argues that point, using the speaker’s own examples as evidence.</p><ol className="toc">{toc.map(([n, title, kind]) => <li key={n}><span>{n}</span><span>{title}</span><time>{kind}</time></li>)}</ol></div>
      </div>
      <div className="spread-grid">{spreads.map((s) => <figure key={s.page}><img src={`${A}/guide-${two(s.page)}.webp`} alt={`Guide page ${s.page}`} width={636} height={900} loading="lazy" /><figcaption>{s.caption}</figcaption></figure>)}</div>
    </div></section>

    <section className="container sample-section">
      <div className="sample-heading"><div><p className="section-label">The LinkedIn carousel</p><h2>The guide’s argument in eight slides</h2></div><p>Uploaded to LinkedIn as a document post, so readers swipe through it in the feed. <a className="text-link" href={`${A}/northstar-linkedin-carousel.pdf`} target="_blank" rel="noreferrer">Open the carousel PDF →</a></p></div>
      <div className="slide-strip" tabIndex={0} aria-label="Carousel slides, scroll sideways">{Array.from({ length: 8 }, (_, i) => <img key={i} src={`${A}/carousel-slide-${two(i + 1)}.webp`} alt={`Carousel slide ${i + 1} of 8`} width={720} height={900} loading="lazy" />)}</div>
    </section>

    <section className="paper-two"><div className="container sample-section">
      <div className="sample-heading"><div><p className="section-label">The LinkedIn posts</p><h2>Eight posts, each with its own visual</h2></div><p>Written in the speaker’s first person. Each post works on its own and points back to the guide. Two of them are shown in full below.</p></div>
      <div className="post-pairs">{posts.map((post) => <article className="post-pair" key={post.n}><img src={`${A}/post-${two(post.n)}.webp`} alt={`Visual for post ${post.n}`} width={720} height={900} loading="lazy" /><div className="post-card"><div className="post-author"><i className="avatar-pattern" /><div><strong>Maya Chen</strong><small>Managing Partner, Northstar Advisory</small></div><span>Post {post.n}</span></div><p className="post-body">{post.body}</p><p className="timestamp">Get the guide →</p></div></article>)}</div>
      <div className="visual-row">{[2, 3, 4, 5, 7, 8].map((n) => <img key={n} src={`${A}/post-${two(n)}.webp`} alt={`Visual for post ${n}`} width={720} height={900} loading="lazy" />)}</div>
    </div></section>

    <section className="container sample-section">
      <div className="sample-heading"><div><p className="section-label">Motion clips</p><h2>Short clips for the feed, in the same design</h2></div><p>The key figure and the strongest line, animated in 4:5 for LinkedIn. When the client sends the video file, we also cut captioned clips of the speaker.</p></div>
      <div className="clip-grid">
        <figure><video src={`${A}/figure-clip-01.mp4`} poster={`${A}/figure-clip-01-poster.webp`} controls muted playsInline preload="none" width={1080} height={1350} /><figcaption>Figure clip · 11 seconds</figcaption></figure>
        <figure><video src={`${A}/quote-clip-02.mp4`} poster={`${A}/quote-clip-02-poster.webp`} controls muted playsInline preload="none" width={1080} height={1350} /><figcaption>Quote clip · 8 seconds</figcaption></figure>
      </div>
    </section>

    <section className="paper-two"><div className="container sample-section sample-split"><div className="sample-copy"><p className="section-label">The emails</p><h2>Three short emails, one job each</h2><p>Email one delivers the guide. Email two develops the sharpest idea. Email three opens the commercial conversation. This is email two.</p></div><article className="email-card"><div className="email-meta"><span><b>From</b> &nbsp;Maya Chen, Northstar Advisory</span><span><b>Subject</b> &nbsp;Decide what the first no may change</span></div><div className="email-body"><p>When a client asks for the old rate, I do not want the account lead deciding the firm’s position for the first time.</p><p>Before the announcement, I would agree what can move. Scope or payment terms may flex. The rate does not move in that first conversation.</p><p>Write that boundary beside the client explanation, then practise the first objection aloud. The boundary is useful only if the person on the call can apply it.</p><p>Maya</p><span className="button button-primary">Read the section on the first no</span></div><p className="timestamp">source 03:17</p></article></div></section>

    <section className="container sample-section sample-split"><div className="sample-copy"><p className="section-label">The landing-page copy</p><h2>Labelled blocks, ready to place</h2><p>Delivered with each block labelled, so whoever runs the website can place it without a briefing.</p></div><div className="landing-blocks"><div><span>Eyebrow</span><p>Guide for managing partners</p></div><div><span>Headline</span><p className="landing-headline">The rate the partners approved is not necessarily the rate clients pay</p></div><div><span>Subheadline</span><p>How to prepare the client conversation, decide what the first no may change and check what was invoiced ninety days later.</p></div><div><span>Form heading</span><p>Get the rate-change guide</p></div><div><span>Button</span><p>Download the guide</p></div></div></section>

    <section className="pricing final-cta"><h2>Want to see this for your own recording?</h2><p>Send us one webinar. We reply within a day with the guide we would build from it.</p><Link className="button button-inverse" href="/apply">Start without a sales call</Link></section>
    <SiteFooter note="Client campaigns are confidential and never published. Northstar Advisory, Maya Chen and the figures in this sample are fictional; the files are output from our production system." />
  </main>;
}
