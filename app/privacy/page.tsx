import type { Metadata } from 'next';
import { SiteFooter, SubpageNav } from '../site-chrome';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Privacy — Afterword',
  description: 'How Afterword handles application, client, and business-contact information.',
};

export default function PrivacyPage() {
  return <main>
    <SubpageNav />
    <section className="subpage-hero container">
      <div>
        <p className="section-label">Privacy</p>
        <h1>Clear, limited use of your information.</h1>
      </div>
      <p className="hero-side">This notice explains what Afterword collects, why it is used, and the choices available to you.</p>
    </section>

    <section className="paper-two">
      <div className="container legal-page">
        <p className="legal-updated">Last updated 15 September 2026</p>

        <section>
          <h2>Who is responsible</h2>
          <p>Andreas Högberg, operating under the name Afterword, is responsible for the personal information described in this notice. Contact <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a> with any privacy question or request.</p>
        </section>

        <section>
          <h2>What we collect</h2>
          <p>When you apply or become a client, we may collect your name, work email, company, website, source links, project answers, correspondence, and the materials needed to deliver the service.</p>
          <p>For carefully targeted business outreach, we may use professional contact details, company information, public source material, and a record of our contact with you. We do not buy broad consumer lists or use sensitive personal information for outreach.</p>
          <p>Basic technical logs may also be processed to operate and protect the website.</p>
        </section>

        <section>
          <h2>Why we use it</h2>
          <ul>
            <li>To review applications and take steps toward a service agreement.</li>
            <li>To produce, review, and deliver client work.</li>
            <li>To send proportionate, relevant business-to-business outreach based on our legitimate interests.</li>
            <li>To operate the service, prevent abuse, keep records, and meet legal obligations.</li>
          </ul>
          <p>We do not make solely automated decisions that produce legal or similarly significant effects.</p>
        </section>

        <section>
          <h2>Sources and service providers</h2>
          <p>Information comes from you, your organisation, publicly available company websites, professional profiles, and content your organisation has published. We use service providers for hosting, email, AI-assisted production, and business operations. They may process information only to provide those services.</p>
          <p>Where information is processed outside the EEA, we use an appropriate transfer mechanism when required.</p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>We keep information only as long as needed for the purpose collected. Unsuccessful applications and outreach records are normally retained for up to 12 months. A minimal suppression record may be kept longer so we can honour an opt-out. Client and financial records are retained as required to deliver the service and meet legal obligations.</p>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <p>You can ask to access, correct, delete, or restrict your information, and you can object to processing based on legitimate interests. You may object to direct marketing at any time; when you do, it stops.</p>
          <p>Email <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a>. You may also lodge a complaint with the Swedish Authority for Privacy Protection, <a href="https://www.imy.se/" rel="noreferrer">IMY</a>.</p>
        </section>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
