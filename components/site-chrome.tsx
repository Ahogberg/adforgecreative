import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const CONTACT_EMAIL = siteConfig.contactEmail;

export function Wordmark({ href = '/' }: { href?: string }) {
  return (
    <Link className="wordmark" href={href} aria-label="Afterword home">
      Afterword<span aria-hidden="true">.</span>
    </Link>
  );
}

/**
 * `home` shows the in-page section links, `sub` the back link plus Apply,
 * `bare` only the back link (apply and thank-you), `internal` the kit tag.
 */
export function SiteNav({ variant = 'sub' }: { variant?: 'home' | 'sub' | 'bare' | 'internal' }) {
  return (
    <nav className="container site-nav">
      <Wordmark href={variant === 'home' ? '#top' : '/'} />
      {variant === 'internal' ? (
        <span className="nav-tag">Internal · production standard</span>
      ) : variant === 'bare' ? (
        <Link className="nav-back" href="/">
          ← Back to the service
        </Link>
      ) : (
        <div className="nav-links">
          {variant === 'home' ? (
            <>
              <a href="#how">How it works</a>
              <a href="#output">What you get</a>
              <Link href="/sample">Sample month</Link>
              <Link href="/review">How review works</Link>
              <a href="#pricing">Pricing</a>
            </>
          ) : (
            <Link className="nav-back" href="/">
              ← Back to the service
            </Link>
          )}
          <Link className="button button-primary" href="/apply">
            Apply
          </Link>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter({ note }: { note?: string }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <Wordmark />
        {note ? (
          <p>{note}</p>
        ) : (
          <div className="footer-links">
            <Link href="/sample">Sample month</Link>
            <Link href="/review">How review works</Link>
            <Link href="/apply">Apply</Link>
          </div>
        )}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </footer>
  );
}
