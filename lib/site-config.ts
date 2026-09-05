/**
 * Content switches that used to be design-tool props. Move these to a CMS
 * when there is one; until then they are edited here.
 */
export const siteConfig = {
  /** Editor section on the home page (needs the portrait asset to be current). */
  showEditor: true,
  /**
   * Testimonials are off until the founding clients have supplied real,
   * permission-cleared quotes. The cards in `testimonials` below are
   * bracketed placeholders — do not publish them as if they were real.
   */
  showTestimonials: false,
  /** Founding memberships still open, and the cohort they are for. */
  spotsLeft: 3,
  cohortMonth: 'October',
} as const;

const words = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export function spotsLine(spots: number, month: string): string {
  return `${words[spots] ?? spots} founding memberships open · ${month}`;
}
