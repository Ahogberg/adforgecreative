import Link from 'next/link';
import { brand } from '@/lib/brand';

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label={`${brand.name} home`}>
      {brand.name}<span>.</span>
    </Link>
  );
}

export function MainNav() {
  return (
    <nav className="site-nav container">
      <Wordmark />
      <div className="nav-links" aria-label="Primary navigation">
        <a href="#how">How it works</a>
        <a href="#output">What you get</a>
        <Link href="/sample">Sample month</Link>
        <Link href="/review">How review works</Link>
        <a href="#pricing">Pricing</a>
        <Link className="button button-small button-primary" href="/apply">Apply</Link>
      </div>
    </nav>
  );
}

export function SubpageNav({ apply = true }: { apply?: boolean }) {
  return (
    <nav className="site-nav container">
      <Wordmark />
      <div className="subnav-links">
        <Link className="back-link" href="/">← Back to the service</Link>
        {apply && <Link className="button button-small button-primary" href="/apply">Apply</Link>}
      </div>
    </nav>
  );
}

export function SiteFooter({ note }: { note?: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Wordmark />
        {note ? <p>{note}</p> : (
          <div className="footer-links">
            <Link href="/sample">Sample month</Link>
            <Link href="/review">How review works</Link>
            <Link href="/apply">Apply</Link>
          </div>
        )}
        <a className="contact-link" href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a>
      </div>
    </footer>
  );
}
