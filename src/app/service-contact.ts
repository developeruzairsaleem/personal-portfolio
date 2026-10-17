import { EMAIL, LINKS } from "./site-chrome";

/** Primary contact — portfolio & automation inquiries. */
export const CONTACT_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent("Hi Uzair,\n\nI'd like to discuss a project.\n\nWhat I'm trying to automate or build:\n\nTools involved:\n\n")}`;

/** Home page contact: hiring managers and recruiters. */
export const HIRE_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Full-stack role")}&body=${encodeURIComponent("Hi Uzair,\n\nThe role:\n\nLink to the job post:\n\n")}`;

/** Legacy alias for analytics events that still reference booking. */
export const BOOK_HREF = LINKS.calendly;

export const FIT_CHECK_HREF = CONTACT_HREF;
