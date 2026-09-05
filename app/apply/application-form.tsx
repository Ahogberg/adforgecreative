'use client';

import { useRouter } from 'next/navigation';
import { useState, type SyntheticEvent } from 'react';
import { CONTACT_EMAIL } from '@/components/site-chrome';

const sourceTypes = ['webinar', 'podcast', 'workshop', 'keynote', 'interview', 'presentation'];
const startTimings: [string, string][] = [
  ['this-month', 'This month'],
  ['next-month', 'Next month'],
  ['exploring', 'Just exploring'],
];

export function ApplicationForm({ apiUrl }: { apiUrl: string }) {
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const referral = new URLSearchParams(window.location.search).get('ref') ?? '';
    if (referral) data.set('referral', referral);

    if (!apiUrl) {
      const body = [
        `Company: ${field(data, 'companyName')}`,
        `Name: ${field(data, 'contactName')}`,
        `Email: ${field(data, 'contactEmail')}`,
        `Website: ${field(data, 'website')}`,
        `Source: ${field(data, 'sourceUrl')}`,
        `Audience: ${field(data, 'audience')}`,
        `Offer: ${field(data, 'offer')}`,
        `CTA: ${field(data, 'callToAction')}`,
        `Preferred start: ${field(data, 'startTiming')}`,
        referral ? `Preview reference: ${referral}` : '',
      ].join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Afterword founding membership application')}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState('sending');
    setMessage('');
    try {
      const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/intake`, { method: 'POST', body: data });
      if (!response.ok) throw new Error('We could not submit the application.');
      const result = (await response.json()) as { projectId: string };
      const params = new URLSearchParams({
        email: field(data, 'contactEmail'),
        ref: result.projectId.slice(0, 8),
      });
      form.reset();
      router.push(`/thank-you?${params.toString()}`);
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please email us instead.');
    }
  }

  return (
    <form className="application-form" onSubmit={submit}>
      <div className="form-heading">
        <span>Application</span>
        <h2>Tell us what you know.</h2>
        <p>You do not need a brief. A recording and a clear idea of what you sell is enough.</p>
      </div>

      <div className="field-grid">
        <label>
          Company
          <input name="companyName" required minLength={2} placeholder="Northstar Advisory" />
        </label>
        <label>
          Your name
          <input name="contactName" required minLength={2} placeholder="Maya Chen" />
        </label>
        <label>
          Work email
          <input name="contactEmail" type="email" required placeholder="maya@company.com" />
        </label>
        <label>
          Company website
          <input name="website" type="url" required placeholder="https://company.com" />
        </label>
        <label>
          Source type
          <select name="sourceType" defaultValue="webinar">
            {sourceTypes.map((type) => (
              <option key={type} value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Public source URL
          <input name="sourceUrl" type="url" placeholder="https://..." />
        </label>
      </div>

      <label>
        Who should this campaign help?
        <textarea
          name="audience"
          required
          minLength={3}
          placeholder="Operations leaders at 50–500 person professional-services firms"
        />
      </label>
      <label>
        What do you sell?
        <textarea name="offer" required minLength={3} placeholder="The offer and the business problem it solves" />
      </label>

      <div className="field-grid">
        <label>
          What should the reader do next?
          <input name="callToAction" required minLength={3} placeholder="Book a 30-minute assessment" />
        </label>
        <label>
          Preferred start
          <select name="startTiming" defaultValue="this-month">
            {startTimings.map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>
          Voice notes <small>· optional</small>
        </span>
        <textarea name="toneNotes" placeholder="Direct, evidence-led, warm; avoid hype" />
      </label>

      <label className="form-confirm">
        <input name="priceConfirmed" type="checkbox" required />
        <span>
          I understand the founding membership is $1,500/month. This application does not take payment.
        </span>
      </label>

      <input type="hidden" name="primaryColor" value="#1F4D3A" />

      <button className="button button-primary button-block" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : apiUrl ? 'Send application' : 'Open email application'}
      </button>

      {message && <output className={`form-message ${state}`}>{message}</output>}

      <p className="form-fineprint">
        We reply within 24 hours. No sales call required. Prefer a blank email? Write to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </form>
  );
}

function field(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === 'string' ? value : '';
}
