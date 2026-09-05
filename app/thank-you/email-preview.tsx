'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/** Natural width of the transactional email table. */
const EMAIL_WIDTH = 600;

/**
 * The confirmation email is a fixed-width table, so it cannot reflow into the
 * column beside the copy. Render it at its real width and scale it down to fit,
 * taking the height from the document itself so nothing is cut off.
 */
export function EmailPreview({ src, title }: { src: string; title: string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(900);

  const measure = useCallback(() => {
    const width = wrapper.current?.clientWidth;
    if (width) setScale(Math.min(1, width / EMAIL_WIDTH));

    const doc = frame.current?.contentDocument;
    if (doc?.body) setHeight(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight));
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (wrapper.current) observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <div className="email-preview-frame" ref={wrapper} style={{ height: height * scale }}>
      <iframe
        ref={frame}
        src={src}
        title={title}
        onLoad={measure}
        style={{ width: EMAIL_WIDTH, height, transform: `scale(${scale})` }}
      />
    </div>
  );
}
