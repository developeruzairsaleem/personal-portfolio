import { EMAIL, LINKS } from "./site-chrome";

/** Primary contact — portfolio & automation inquiries. */
export const CONTACT_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Automation / development inquiry")}&body=${encodeURIComponent("Hi Uzair,\n\nI'd like to discuss:\n\n• Business / agency: \n• Biggest time sink (support, reporting, delivery): \n• Tools you use today: \n\n")}`;

/** Legacy alias for analytics events that still reference booking. */
export const BOOK_HREF = LINKS.calendly;

export const FIT_CHECK_HREF = CONTACT_HREF;
