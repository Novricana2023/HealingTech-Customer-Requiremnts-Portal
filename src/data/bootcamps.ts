import { contactInfo } from "@/data/contact";

export const bootcampEnrollmentEmail = contactInfo.emailTo;

export const bootcampEnrollmentSubject = "HealingTech Labs Bootcamp Enrollment";

export const bootcampEnrollmentBody =
  "Hello HealingTech Labs,%0D%0A%0D%0AI would like to enroll in a coding bootcamp. Please share available programs, schedules, and fees.%0D%0A%0D%0AName:%0D%0AAge group (child / teen / adult):%0D%0AProgram of interest:%0D%0AContact number:";

export function bootcampEnrollUrl(): string {
  return `mailto:${bootcampEnrollmentEmail}?subject=${encodeURIComponent(bootcampEnrollmentSubject)}&body=${bootcampEnrollmentBody}`;
}

export const bootcamps = {
  headline: "AI, Coding & Innovation Bootcamps",
  intro:
    "Paid, instructor-led programs for children, teens, and young learners who want real skills in coding, artificial intelligence, and digital innovation.",
  programs: [
    {
      title: "Children (8 to 12)",
      description: "Foundational coding, creative problem-solving, and age-appropriate introduction to AI concepts.",
    },
    {
      title: "Teens (13 to 17)",
      description: "Python, web basics, AI literacy, and project-based builds that prepare students for tech careers.",
    },
    {
      title: "Innovation & AI Track",
      description: "Applied AI, automation concepts, and innovation workshops for motivated learners ready to go deeper.",
    },
  ],
  highlights: [
    "Small cohorts with hands-on projects",
    "AI and coding taught by working engineers",
    "Certificates on completion",
    "Paid enrollment with structured curriculum",
  ],
} as const;
