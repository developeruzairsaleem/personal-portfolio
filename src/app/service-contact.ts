import { EMAIL } from "./site-chrome";

/** Every "Email me" button: pre-fills a subject and the two things worth knowing. */
export const HIRE_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Full-stack role")}&body=${encodeURIComponent("Hi Uzair,\n\nThe role:\n\nLink to the job post:\n\n")}`;
